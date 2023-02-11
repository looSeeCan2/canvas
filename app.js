(() => {
	// const container = document.getElementById("container");
	const container = document.querySelector(".container");
	console.log(container);
	const canvas = document.getElementById("myCanvas");
	console.log(canvas);
	const ctx = canvas.getContext("2d");
	console.log(ctx);
	ctx.fillStyle = "blue";
	ctx.fillRect(10, 10, 280, 130);

})();

(() => { 
	const prompt = document.querySelector(".prompt");
	console.log(prompt);
	prompt.addEventListener("click", (e) => {
		console.log(e);
		const valueOfPrompt = window.prompt("Hello, Please introduce yourself:");
		console.log(valueOfPrompt);


	})
})()