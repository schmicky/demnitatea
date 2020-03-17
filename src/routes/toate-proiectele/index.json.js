import posts from './_posts.js';

let myPosts = posts.map(post=>{
	return {
		title: post.title,
		tip: post.tip,
		slug: post.slug,
		data: post.data,
		d: new Date(post.data)
	}
})

myPosts = myPosts.sort((a, b) => b.d - a.d); 

let contents = JSON.stringify(myPosts.map(post => {
	return {
		title: post.title,
		tip: post.tip,
		slug: post.slug,
		data: post.data,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}