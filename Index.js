let str = "123 456 789 123456"
console.log(str	.split(' ')
	.map((word) =>
		(word.length > 4 ?
			word	.split('')
				.reverse()
				.join('')
			:	word))
	.join(' '))