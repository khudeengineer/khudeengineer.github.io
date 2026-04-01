export interface Mentor {
  id: string;
  name: string;
  expertise: string;
  image: string;
  bio: string;
}

export const mentors: Mentor[] = [
  {
    id: "mentor-1",
    name: "মেহেদী হাসান",
    expertise: "প্রোগ্রামিং ও রোবোটিক্স এক্সপার্ট",
    image: "https://picsum.photos/seed/mentor1/400/400",
    bio: "মেহেদী ভাইয়া গত  vai ৫ বছর ধরে ছোটদের প্রোগ্রামিং এবং রোবোটিক্স শিখিয়ে আসছেন। জটিল কোডিং লজিককে মজার গল্পের ছলে বোঝানোই তার সবচেয়ে বড় স্পেশালিটি।"
  },
  {
    id: "mentor-2",
    name: "কেয়া হাসান",
    expertise: "সফটওয়্যার ইঞ্জিনিয়ার ও ওয়েব ডেভেলপার",
    image: "https://picsum.photos/seed/mentor2/400/400",
    bio: "কেয়া আপু একজন প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ার। তিনি বিশ্বাস করেন, সঠিক গাইডলাইন পেলে যেকোনো শিশুই একদিন সফল প্রোগ্রামার হতে পারে।"
  },
  {
    id: "mentor-3",
    name: "নিয়ামুল হাসান",
    expertise: "আইওটি ও ইলেকট্রনিক্স ইন্সট্রাক্টর",
    image: "https://picsum.photos/seed/mentor3/400/400",
    bio: "খুদে উদ্ভাবকদের জন্য নতুন নতুন সার্কিট এবং গ্যাজেট ডিজাইন করা নিয়ামুলের সবচেয়ে পছন্দের কাজ। তার ক্লাসে সবসময়ই নতুন কিছু শেখার উত্তেজনা থাকে।"
  }
];
