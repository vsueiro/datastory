let results = document.querySelector( '.results' )
let input = document.querySelector( 'input' )
let options = document.querySelectorAll( 'option' )
let form = document.querySelector( 'form' )
let genders = [ 'male', 'female' ]

form.addEventListener( 'submit', function( event ) {

  updateResults()
  event.preventDefault()

} )

function clear( node ) {
  while (node.firstChild) {
    node.removeChild(node.lastChild)
  }
}

function updateResults() {

  clear( results )
  let occupations = []

  if ( input.value ) {

    occupations.push( input.value )

  } else {

    for ( let option of options ) {
      occupations.push( option.value )
    }

  }

  let max = 1
  let count = 0

  for ( let occupation of occupations ) {

    if ( count < max ) {

      for ( let gender of genders ) {

        let url = 'occupations-male-female/' + gender + ' ' + occupation + '-0.json' + '?v=2'

        fetch( url )
          .then(response => response.json())
          .then(data => {

            let section = document.createElement( 'section' )
            section.dataset.occupation = data.search_parameters.q

            let heading = document.createElement( 'h2' )
            heading.innerHTML = data.search_parameters.q

            let grid = document.createElement( 'div' )
            grid.classList.add( 'grid' )

            for ( let image of data.images_results ) {

              let a = document.createElement( 'a' )
              a.href = image.original
              a.target = '_blank'
              a.classList.add( 'grid-item' )

              let img = document.createElement( 'img' )

              img.src = image.thumbnail
              // img.width = 100
              // img.height= 100

              a.appendChild( img )
              grid.appendChild( a )

            }

            section.appendChild( heading )
            section.appendChild( grid )
            results.appendChild( section )

          });

      }

    }

    count++

  }

}

updateResults()


/*
let occupations = [
  // 'artist',
  // 'cleaner',
  // 'coder',
  // 'designer',
  // 'doctor',
  // 'lawyer',
  // 'maid',
  // 'police-officer',
  // 'professor',
  // 'singer',
  // 'teacher',

  'freedom',
  'war'

]

let occupations = [
  'administrative assistant',
  'announcer',
  'architect',
  'author',
  'baker',
  'barber',
  'bartender',
  'bill collector',
  'biologist',
  'building inspector',
  'building painter',
  'bus driver',
  'butcher',
  'carpenter',
  'cashier',
  'chef',
  'chemist',
  'chief executive officer',
  'childcare worker',
  'chiropractor',
  'claims adjuster',
  'clergy member',
  'computer programmer',
  'construction worker',
  'cook',
  'counselor',
  'courier',
  'crane operator',
  'crossing guard',
  'custodian',
  'customer service representative',
  'dental hygienist',
  'dentist',
  'designer',
  'detective',
  'dishwasher',
  'doctor',
  'drafter',
  'editor',
  'electrician',
  'engineer',
  'exterminator',
  'financial advisor',
  'Financial analyst', // capitalized
  'firefighter',
  'flight attendant',
  'fundraiser',
  'garbage collector',
  'groundskeeper',
  'hairdresser',
  'high school teacher',
  'housekeeper',
  'insurance sales agent',
  'lab tech',
  'lawyer',
  'librarian',
  'logistician',
  'machinist',
  'mail carrier',
  'massage therapist',
  'nurse practitioner',
  'nurse',
  'optician',
  'paralegal',
  'paramedic',
  'parking attendant',
  'pharmacist',
  'photographer',
  'physical therapist',
  'pilot',
  'plumber',
  'police officer',
  'PR person',
  'primary school teacher',
  'private investigator',
  'psychologist',
  'real estate agent',
  'receptionist',
  'roofer',
  'security guard',
  'social worker',
  'software developer',
  'special ed teacher',
  'tax collector',
  'tax preparer',
  'taxi driver',
  'technical writer',
  'telemarketer',
  'teller',
  'tour guide',
  'travel agent',
  'truck driver',
  'typist',
  'veterinarians',
  'web developer',
  'welder',
]

*/
