let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)

challenge = challenge.toUpperCase()
console.log(challenge)

challenge = challenge.toLowerCase()
console.log(challenge)

challenge = challenge.substring(3,challenge.length)
console.log(challenge)

challenge = '30 Days Of JavaScript'
challenge = challenge.replace('Days Of JavaScript','')
console.log(challenge)

challenge = '30 Days Of JavaScript'
console.log(challenge.includes('Script'))

challenge = challenge.split(' ')
console.log(challenge)

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
companies = companies.split(', ')
console.log(companies)

challenge = '30 Days Of JavaScript'
console.log(challenge.charAt(15))

let index = challenge.indexOf('J')
console.log(challenge.charCodeAt(index))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf('because'))
console.log(because.lastIndexOf('because'))
console.log(because.search('because'))

console.log(' 30 Days Of JavaScript '.trim())

console.log('30 Days Of JavaScript'.startsWith('3'))
console.log('30 Days Of JavaScript'.endsWith('t'))

let pat = /a/g
console.log('30 Days Of JavaScript'.match(pat))

console.log('30 Days of'.concat(' JavaScript'))

console.log('30 Days Of JavaScript'.repeat(2))

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(typeof parseInt('10') == typeof 10)

console.log('python'.includes('on') && 'jargon'.includes('on'))

console.log('I hope this course is not full of jargon'.includes('jargon'))

console.log(Math.random() * 100)

console.log(Math.random() * 50 + 50)

console.log(Math.random() * 255)

console.log('JavaScript'.charAt(Math.random() * ('JavaScript'.length - 1)))

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

//too laZy
//console.log('You cannot end a sentence with because because because is a conjunction'.substring())

let pattern = /love/gi
console.log(('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(pattern)).length)

pattern = /because/gi
console.log(('You cannot end a sentence with because because because is a conjunction'.match(pattern)).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
pattern = /[%@#&$;]/g
console.log(sentence.replace(pattern, ''))
//max is 'I'

let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
pattern = /[0-9]+/g
let numbers = text.match(pattern)
console.log(Number(numbers[0]) * 12 + Number(numbers[1]) + Number(numbers[2]) * 12)