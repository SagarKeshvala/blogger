import mongoose from "mongoose";

export const ConnectDB = async () => {
	await mongoose.connect(
		"mongodb+srv://sagarkeshwala15:kdjHVWoCeIMhHGJf@cluster0.sqbl6w0.mongodb.net/blogger-app"
	);
	console.log("DB connected!");
};
