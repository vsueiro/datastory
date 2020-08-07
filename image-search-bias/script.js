let results = document.querySelector( '.results' )
let input = document.querySelector( 'input' )
let options = document.querySelectorAll( 'option' )
let form = document.querySelector( 'form' )

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

  for ( let occupation of occupations ) {

    let url = 'occupations/' + occupation + '-0.json'

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

          let item = document.createElement( 'img' )
          item.classList.add( 'grid-item' )

          item.src = image.thumbnail
          item.width = 100
          item.height= 100

          grid.appendChild( item )

        }

        section.appendChild( heading )
        section.appendChild( grid )
        results.appendChild( section )

      });

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
