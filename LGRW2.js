const modhash = window.reddit.modhash;
var sec = 1, index = 0;
setInterval(() => console.log("Drawing in " + (sec--) + " seconds"), 1e3);
const draw = seconds => {
    index++
    sec = seconds = Math.ceil(seconds/1000)
    setTimeout(() => {
        const x = index % 64;
        const y = Math.floor(index / 64);
        const logoColors =
        [[0,0,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,5,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,5,0,0,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,5,0,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,5,5,5,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,5,0,5,5,0,0,5,0,0,0,5,5,5,5,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,5,0,0,5,5,0,0,5,5,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,5,0,0,0,5,5,0,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,5,0,0,0,5,5,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,5,0,0,0,0,5,5,0,0,0,0,0,0,0,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,5,0,0,0,0,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,5,0,5,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,5,0,5,5,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,5,0,0,5,5,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,5,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,0,0,5,0,0,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,5,5,5,5,0,0,0,5,5,5,5,5,0,5,0,0,0,5,0,0,0,0,0,5,0,0,5,5,0,0,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0,0,0,0,0,0,0],
		[0,0,0,5,5,0,0,0,0,0,0,0,5,5,5,5,5,5,0,0,0,5,5,5,5,5,0,0,5,5,5,5,5,0,0,0,5,5,0,0,0,0,5,5,5,5,5,5,5,5,0,0,0,5,5,0,0,0,0,0,0,0,0],
		[0,0,0,0,5,5,0,5,5,5,0,0,0,0,0,5,5,5,5,5,0,0,0,0,5,5,5,5,0,0,0,5,5,5,0,0,0,5,5,0,5,5,0,0,0,0,0,0,0,0,5,5,0,0,5,5,5,0,0,0,0,0,0],
		[0,0,0,0,0,5,5,0,0,0,5,5,0,5,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,0,0,0,5,5,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,5,5,5,0,0,0,0,0],
		[0,0,0,0,0,0,5,5,5,0,0,0,5,5,5,5,5,5,0,0,0,0,0,5,5,5,5,5,5,0,0,5,5,5,5,5,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,5,5,5,0,0,0,0],
		[0,0,0,0,0,0,5,5,5,5,0,0,0,0,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,0,0,5,0,0,5,5,5,5,5,5,5,0,0,0,0,0,0,5,0,5,5,0,0,0,0],
		[0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,5,0,5,0,0,0,0,0,0,0,5,5,0,0,0,0,5,0,0,5,5,0,0,0],
		[0,0,0,0,0,0,0,0,5,5,0,0,5,5,5,5,5,5,0,0,0,0,0,0,5,5,5,5,5,5,5,0,0,5,5,5,5,5,0,5,0,0,0,5,0,5,5,0,5,0,0,5,0,0,0,0,5,0,0,5,5,0,0],
		[0,0,0,0,0,0,0,0,0,5,5,0,0,0,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,0,5,0,0,5,5,0,5,5,0,5,5,0,0,5,0,0,0,0,5,0,5,5,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,0,0,5,5,5,5,5,5,5,5,0,0,5,5,5,5,5,0,0,0,0,0,0,0,5,0,5,0,0,0,0,0,0,0,0,5,0,0,5,0,0,0,0,0,0,5,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,0,0,0,5,0,0,0,5,0,0,0,5,5,0,0,5,5,5,0,5,0,0,0,0,0,0,5,5,0],
		[0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,5,5,5,5,0,5,5,5,5,5,0,0,0,0,5,5,5,0,0,0,5,5,5,0,5,0,5,0,0,0,0,0,5,0,5,0,0,0,5,0,0,0,0,0,5,5,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0,0,5,5,5,5,5,5,5,0,0,0,0,0,5,5,5,0,0,0,0,0,5,0,0,0,0,0,0,0,0,5,0,5,5,0,5,0,0,0,0,0,5,5,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,5,0,0,5,5,5,5,5,5,5,5,5,0,5,5,0,5,5,5,0,0,0,0,0,0,0,5,0,0,0,0,0,0,5,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0,0,5,5,5,5,5,5,5,0,0,0,0,5,5,0,0,0,0,0,0,0,5,5,5,0,0,5,0,5,5,0,5,0,0,0,0,0,0,5,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,0,5,5,5,5,5,0,0,0,0,0,0,5,5,0,0,5,5,5,0,5,0,0,5,5,5,0,0,5,0,5,5,0,5,0,5,5,5,0,0,5,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,5,5,5,5,5,0,5,5,5,0,5,5,0,0,0,0,0,0,0,0,0,5,5,0,5,0,5,5,5,0,0,5,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,5,5,5,5,5,0,0,0,5,5,0,0,5,5,0,5,0,0,0,0,0,5,0,0,5,5,0,5,0,5,5,5,0,5,5,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,0,0,0,0,0,0,5,5,5,0,0,5,5,0,5,0,0,0,5,0,0,0,5,0,5,0,5,0,5,5,5,0,0,5,5,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,0,0,5,5,0,5,0,5,5,0,5,0,0,0,0,0,0,0,5,5,5,0,0,5,0,5,5,5,0,0,5,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,0,0,0,5,0,0,0,5,0,0,5,5,0,5,5,0,0,0,5,5,0,5,0,0,5,5,0,0,0,5,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,0,5,5,5,0,0,5,0,0,5,0,5,5,0,5,5,0,0,5,0,0,5,5,5,0,0,5,5,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,5,5,5,0,0,5,5,0,0,0,0,0,0,0,0,5,0,0,5,5,5,0,0,5,5,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,5,5,5,5,0,0,5,5,5,5,5,5,5,5,0,0,5,5,5,5,0,5,5,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,5,5,5,5,5,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,5,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,5,5,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,5,5,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,0,0,0,5,5,5,5,5,5,5,0,0,0,0,5,5,5,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

        const logoColor = logoColors[y][x];
        const xChange = logoColor != logoColors[y][x - 1] || logoColor != logoColors[y][x + 1];
        const yChange = (logoColors[y - 1] && logoColor != logoColors[y - 1][x]) || (logoColors[y + 1] && logoColor != logoColors[y + 1][x]);
        if  (!xChange && !yChange) {
            return draw(0);
        }
        const ax = 251 - x;
        const ay = y + 539;

        $.get("https://www.reddit.com/api/place/pixel.json?x=" + ax + "&y=" + ay)
        .then(res => {
            if (res.color == logoColor) {
                console.log("Skipping " + (ax + ", " + ay) + " because it's already correct");
                return draw(1000);
            }
            console.log("Drawing at " + ax + ", " + ay + " (https://www.reddit.com/r/place/#x=" + ax + "&y=" + ay + ")");
            const response = $.ajax({ url: "https://www.reddit.com/api/place/draw.json", type: "POST",
                headers: { "x-modhash": modhash }, data: { x: ax, y: ay, color: logoColor }
            })
            .done(data => draw(300000))
            .error(data => draw(300000));
	})
.fail(data => draw(0));
    }, seconds);
}
draw(0);
