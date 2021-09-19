const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
// const ffmpeg = require('ffmpeg');
var FfmpegCommand = require('fluent-ffmpeg');
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const stream = require('stream');
const util = require('util');
const child_process = require('child_process');

const app = new Koa();
app.use(cors());

app.use(require('koa-static')(path.join(__dirname)));

const router = new Router();
const finished = util.promisify(stream.finished);

router.get('/hi', async (ctx, next) => {
  ctx.body = 'Hello world';
});

router.get('/save', async (ctx, next) => {
  // ctx.router available
  let mainUrl = ctx.request.query.audio;
  let duration = ctx.request.query.duration;
  duration = duration - 5;
  duration = duration < 0 ? 0 : duration;
  console.log(duration);
  let r = await downloadFile(
    //   'https://www.kozco.com/tech/organfinale.mp3',
    mainUrl,
    path.join(__dirname, '/audiosToSave/audio.mp3'),
    ctx,
    duration
  );

  ctx.body = r;
});

async function downloadFile(fileUrl, outputLocationPath, ctx, duration) {
  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(outputLocationPath);
    return axios({
      method: 'get',
      url: fileUrl,
      responseType: 'stream',
    }).then(async (response) => {
      response.data.pipe(writer);
      await finished(writer); //this is a Promise
      // var process = new ffmpeg(outputLocationPath);
        console.log('UPLOADING NOWW')
    //   child_process.exec(
    //     `ffmpeg -i ${outputLocationPath} -acodec copy -ss ${duration} -t 10 ${path.join(
    //       __dirname,
    //       '/audiosToSave/trimmedAudio.mp3'
    //     )}`,
    //     async (error, stdout, stderr) => {
    //       console.log(error, stdout, stderr);
    //       resolve(`https://audio-trimmer-koa.herokuapp.com/audiosToSave/trimmedAudio.mp3`); 
    //     }
    //   );
        FfmpegCommand(outputLocationPath)
          .inputOptions([`-ss ${duration}`, '-t 10']) // 2s
          .audioCodec('copy')
          .output(path.join(__dirname, '/audiosToSave/trimmedAudio.mp3'))
          .on('end', () => {
            // ctx.body = path.join(__dirname, '/audiosToSave/trimmedAudio.mp3');
            resolve(`https://audio-trimmer-koa.herokuapp.com/audiosToSave/trimmedAudio.mp3`); // fix stdout
          })
          .run();
    });
  });
}

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log('Server started on port 3000');
});
