import { model, Schema } from "mongoose"

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [100, "Name must be less than 100 characters"],
        match: [/^[A-Za-z\s]+$/, "Name must contain only letters and spaces"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Email must be valid"],
        immutable: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false,
        minlength: [8, "Password must be at least 8 characters"],
        validate: {
            validator: function (v: string) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: "Password must contain uppercase, lowercase, digit, and special character"
        }
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
        unique: true,
        match: [/^\d{10,15}$/, "Phone must be 10-15 digits"]
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        minlength: [5, "Address must be at least 5 characters"]
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
})

const User = model<IUser>('User', userSchema)
export default User;