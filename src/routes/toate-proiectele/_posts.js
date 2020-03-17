// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    beneficiar: "Brauletul",
    title:
      'Ansamblul Folcloric "Brâulețul" a fost prezent la Restaurant Dorna in cadrul spectacolului Lăutari din Chișinău și Maestrul Nicolae Botgros.',
    slug: "brauletul-la-restaurant-dorna",

    html: `
			<p>Ansamblul Folcloric "Brâulețul" a fost prezent la Restaurant Dorna in cadrul spectacolului Lăutari din Chișinău și Maestrul Nicolae Botgros.</p>
		`,
    foto: ["89480205_2906399932716037_620021019289059328_o.jpg"],
    videoFb: ["https://www.facebook.com/Brauletul/videos/842509842438400/"],
    iframe: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBrauletul%2Fposts%2F2906400119382685&width=500" width="500" height="670" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
    data: "2020-03-07",
    linkExtern: "",
    tip: "brauletul",
    suma: ""
  },

  {
    beneficiar: "Spitalul Judetean Constanta",
    title: "Alaturi de Spitaulul Judetean in lupta cu COVID-19",
    slug: "donatie-aparate-de-ventilatie-mecanica",
    html: `
			<p>Fundaţia “Demnitatea Pontică” a decis să doneze aparatură medicală care sa vina in sprijinul persoanelor infectate cu COVID-19. Este vorba despre aparate de ventilaţie mecanică, necesare în cazul pacienţilor cu probleme respiratorii; aparatura, care este scumpă, susţine funcţionarea plămânilor şi pot fi folosite şi pentru nou-născuţi.</p>
		`,
    foto: ["aparat-ventilatie-mecanica-696x571.jpg"],
    //videoFb: ["https://www.facebook.com/Brauletul/videos/842509842438400/"],
    //iframe:`<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBrauletul%2Fposts%2F2906400119382685&width=500" width="500" height="670" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>`,
    data: "2020-03-14",
    linkExtern: {
      link:
        "https://focuspress.ro/solidaritate-in-momente-de-criza-companii-membre-ale-unei-fundatii-doneaza-aparate-de-ventilatie-mecanica-pentru-pacientii-spitalului-judetean-constanta/",
      titlu: "Articol Focuspress"
    },
    tip: "caritate",
    suma: "40,000 EUR"
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
