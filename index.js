import express from "express";
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 5000;
const BD_URL = 'mongodb+srv://timpriadko:LVMw2VeE9u21UBqe@cluster0.b3bpude.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(BD_URL);
		app.listen(PORT, () => console.log('Server started on port ' + PORT))
	} catch (e) {
		console.log(e)
	}
}

startApp()