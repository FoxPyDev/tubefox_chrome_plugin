window.addEventListener('yt-page-data-updated', addDownloadButton);

function addDownloadButton() {
    const titleElement = document.querySelector('h1.ytd-watch-metadata');

    if (titleElement && !document.querySelector('#download-video-btn')) {
        const downloadButton = document.createElement('button');
        downloadButton.id = 'download-video-btn';
        downloadButton.innerText = 'Download video';
        downloadButton.onclick = function() {
            window.location.href = 'https://www.tubefox.xyz/';
        };

        titleElement.parentNode.insertBefore(downloadButton, titleElement.nextSibling);
    }
}
