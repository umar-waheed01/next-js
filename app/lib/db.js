const {username, password} = process.env
export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.koweay0.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0";
