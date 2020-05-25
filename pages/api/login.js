import jwt from 'jsonwebtoken'

export default (req, res) => {
	const {
		body: {
			email, password
		}
	} = req

	if(email != 'blog.alifata@gmail.com') return res.status(400).send('Wrong Email !')
	if(password != '123456') return res.status(400).send('Wrong Password !')

	const token = jwt.sign({
	  email, password
	}, 'secret', { expiresIn: 30 });

	res.send(token)
}