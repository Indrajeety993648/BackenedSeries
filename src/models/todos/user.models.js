import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    //ye bhi correct hai beginner use this approach to  design Schema  ...
    // username : String,
    // email : String,
    // isActive : Boolean

    // Professionals Use this  To design Schema ...

    username: {
      type: String,
      required: true, // iska matlab ye field hona hi chahiye
      unique: true, // ye field unique hi hogi  ... ye mongoose dhyan rakhega iska  ...
      lowercase: true, // ye dhyan rakhega ki  unique field mei  jo bhi aayega  vo hamesha lowercase mei hi rahe  ...
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'], // isme custom messages  bhi de sakta hu  .. agar password nhi mila to  ye  message display hoga  ... aur bhi bahut kucch pass kar sakte hai ki  minimum length kitni honi chahiye hamare password ki  ... maximum length kitni honi chahiye hamare password ki  ... ye  sab bhi likh sakte hai jo mongoose facility deta hai ...
    },

    // timestamp  : - createdAt , updatedAt    ye hame  facility provide karte hai ki  kab ye entry apne data mei add hui hai ... aur kab ye  entry update hui hai ...
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema); // isme jo naam "User" hai jiska first letter capital hai  lekin jab ye database mongoose se connect karega to ye waha pr   plural ho jata hai aur sab lowercase mei aa jate hai ...
// "users"
