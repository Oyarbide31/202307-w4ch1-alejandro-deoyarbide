const casposos= [
  {
    id: 1,
    name: 'Bertin Osborne',
    status: 'Alive',
    profession: 'Youtuber',
    twitter: '@osbourne',
    picture: 'bertin.jpg',
    alternativeText: 'Osbourne pointing at you',
    selected: true,
  },
  {
    name: 'The Farytale',
    status: 'RIP',
    profession: 'Influencer',
    twitter: 'pending',
    picture: 'fary.jpg',
    alternativeText: 'The Fary pointing at you',
    id: 2,
    selected: false,
  },
  {
    id: 3,
    name: 'Julius Churchs',
    status: 'Alive',
    profession: 'Java developer',
    twitter: '@julius_churchs',
    picture: 'julio.jpg',
    alternativeText: 'Churchs pointing at you',
    selected: true,
  },
];

const casposos =()=>{
  return (
    
    <section className="controls">
      <p className="info">0 gentlemen pointing at you</p>
      <button className="button button--select">Select all</button>
    </section>
    <main className="main">
      <ul className="gentlemen">
        <li className="gentleman">
          <div className="gentleman__avatar-container">
            <img className="gentleman__avatar" src="./imagenes/fary.jpg" alt="The Fary pointing at you" />
            <span className="gentleman__initial">F</span>
          </div>
          <div className="gentleman__data-container">
            <h2 class="gentleman__name">The Fary</h2>
            <ul className="gentleman__data-list">
              <li className="gentleman__data">
                <span className="gentleman__data-label">Profession:</span>
                Influencer
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Status:</span> RIP
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Twitter:</span> Pending
              </li>
            </ul>
          </div>
          <i className="icon gentleman__icon fas fa-check"></i>
          <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </li>
      </ul>
    </main>
  );
}
