const saveAudio = async () => {
  let downloadButton = document.querySelector('#audioDownloadButton');
  downloadButton.setAttribute('disabled', true);
  NProgress.configure({ trickle: false });
  NProgress.start();
  let url = localStorage.getItem('audioUrl');
  let duration = localStorage.getItem('currentAudioDuration');

  //     let res = await axios.get(`http://localhost:3000/save?audio=${url}`)
  //     console.log(res.data)
  let apiRes = await axios.get(
    `https://audio-trimmer-koa.herokuapp.com/save?audio=${url}&duration=${duration}`
  );

  //   Download your file
  download('audio.mp3', apiRes.data);
};

const download = (filename, fileurl) => {
  const method = 'GET';
  axios
    .request({
      url: fileurl,
      method,
      responseType: 'blob',
    })
    .then((response) => {
      let fileURL = window.URL.createObjectURL(new Blob([response.data]), {
        type: response.headers['content-type'],
      });
      let fileLink = document.createElement('a');
      fileLink.href = fileURL;

      let fileName = filename;

      fileLink.setAttribute('download', fileName);
      document.body.appendChild(fileLink);

      fileLink.click();
      fileLink.remove();
      NProgress.done(true);
      let downloadButton = document.querySelector('#audioDownloadButton');
      downloadButton.removeAttribute('disabled');
    })
    .catch((error) => {
      console.log(error);
    });
  //   var link = document.createElement('a');
  //   link.download = filename;
  //   link.href = fileurl;
  //   link.click();

  //   fetch(fileurl, { mode: 'no-cors' })
  //     .then((resp) => resp.blob())
  //     .then((blob) => {
  //         console.log(blob)
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement('a');
  //       a.style.display = 'none';
  //       a.href = url;
  //       // the filename you want
  //       a.download = 'audioTest.mp3';
  //       document.body.appendChild(a);
  //       a.click();
  //       window.URL.revokeObjectURL(url);
  //       NProgress.done(true);
  //     })
  //     .catch(() => alert('oh no!'));
};
