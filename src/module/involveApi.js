const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUchJcdqjG77aDKZUYlr/comments/';
const apiUrl2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUchJcdqjG77aDKZUYlr/comments?item_id=item1'

export const postData = async () => {
    const awaitData = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
            item_id: "item1",
            username: "UserName",
            comment: "Comments"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.status);
    return awaitData;
}

console.log('response:', postData());

export const getItemFromApi = fetch(apiUrl2).then(response => response.json())
.then(json => console.log(json));




  




