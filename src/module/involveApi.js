const innerButtonClickFunc = async () => {
    innerButton.addEventListener('click', () => {
      if (!nameInput.value == '' || !messageInput.value == '') {
      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          item_id: 'item1',
          username: nameInput.value,
          comment: messageInput.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => console.log(res.status));
      } 
       fetch(apiUrl2).then(response => response.json())
      .then(json => json.forEach((e) => {
        displyText.innerHTML += `<li> ${e.creation_date} ${e.username} : ${e.comment}`;
          commentCountDiv.textContent = `comments ${json.length}`;
      }));
      });
    };














