function disemvowel(str)
{
	const vowels = ["a", "e", "i", "o", "u"]
	const letters = str.split("");
	let newWord = '';

	for (const el of letters)
	{
		if (vowels.includes(el.toLowerCase()) || vowels.includes(el.toUpperCase()))
		{
		}
		else
		{
			newWord += el
		}
	}
	return newWord;
}

function disemvowelSmall(str)
{
	return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("hi there"));
console.log(disemvowelSmall("howdy partner"));