var listaFilmes = [
  'https://m.media-amazon.com/images/I/711dLCQ6kuL._AC_UF1000,1000_QL80_.jpg', 
  'https://br.web.img2.acsta.net/medias/nmedia/18/87/31/00/19874174.jpg',
  'https://br.web.img2.acsta.net/medias/nmedia/18/87/79/16/19961587.jpg',
  'https://br.web.img3.acsta.net/pictures/16/01/25/13/24/532675.jpg',
  "https://i.pinimg.com/originals/a5/06/38/a5063877093f03027bd085a141a0215b.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/33/59/20140728.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/87/34/28/20028730.jpg",
  "https://images.justwatch.com/poster/248383484/s592/as-branquelas",
  "https://th.bing.com/th/id/R.94d28c7edd1234a698ff78087dfbdb3a?rik=5Iakq1YKDBKGhw&pid=ImgRaw&r=0"
];

var elementoListaFilmes = document.getElementById('box-filmes');

for (var i = 0; i < listaFilmes.length; i++){
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + listaFilmes[i] + '>';
  // document.write('<img src =' + listaFilmes[i] + '>');
}