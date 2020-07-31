let occupations = [
  'artist',
  'cleaner',
  'coder',
  'designer',
  'doctor',
  'lawyer',
  'maid',
  'police-officer',
  'professor',
  'singer',
  'teacher',
]

for ( let occupation of occupations ) {

  let url = 'data/' + occupation + '.json'

  fetch( url )
    .then(response => response.json())
    .then(data => {

      console.log( data )

      let grid = document.createElement( 'div' )
      grid.classList.add( 'grid' )
      grid.id = data.search_parameters.q

      for ( let image of data.images_results ) {

        let item = document.createElement( 'img' )
        item.classList.add( 'grid-item' )

        item.src = image.thumbnail

        grid.appendChild( item )

      }

      document.body.appendChild( grid )

    });

}
