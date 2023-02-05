document.getElementById("compareBtn").addEventListener("click", function () {
  var channel1 = document.getElementById("channel1").value;
  var channel2 = document.getElementById("channel2").value;

  // Fetch the channel data from the YouTube API
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forUsername=${channel1}&key=AIzaSyBgrMK5Wje2p6nAOB1z4WMqMNGK9oq5obI`
  )
    .then((response) => response.json())
    .then((data1) => {
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forUsername=${channel2}&key=AIzaSyBgrMK5Wje2p6nAOB1z4WMqMNGK9oq5obI`
      )
        .then((response) => response.json())
        .then((data2) => {
          // Display the result
          var result = `
           <h2>${channel1} vs ${channel2}</h2>
           <p>Subscribers: ${data1.items[0].statistics.subscriberCount} vs ${data2.items[0].statistics.subscriberCount}</p>
           <p>Views: ${data1.items[0].statistics.viewCount} vs ${data2.items[0].statistics.viewCount}</p>
           <p>Videos: ${data1.items[0].statistics.videoCount} vs ${data2.items[0].statistics.videoCount}</p>
         `;
          document.getElementById("result").innerHTML = result;
        });
    });
});
