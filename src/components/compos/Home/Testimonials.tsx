// import React from 'react';
// import { BadgeCheck , Twitter } from 'lucide-react';
// import { BsTwitterX } from "react-icons/bs";

// interface testsec{
//   id:string
// }

// const Testimonials:React.FC<testsec> = ({id}) => {
//   return (
//     <div className="py-16 bg-neutral-50 dark:bg-neutral-950" id={id}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h3 className="text-sm font-medium text-green-600 dark:text-green-400 uppercase mb-2">Testimonials</h3>
//           <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Think about us</h2>
//           <p className="text-neutral-600 dark:text-neutral-400 mb-12">That's the main thing people are controlled by! Thoughts - their perception of themselves!</p>
//         </div>
//         <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
//           <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
//             <div className="flex items-center mb-4">
//               <img src="/users/rivage-jzz_3jWMzHA-unsplash.jpg" alt="Jessica Devis" className="w-12 h-12 rounded-full object-cover mr-4"/>
//               <div>
//                 <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Jessica Devis <BadgeCheck className="inline text-blue-500" size={16} /></h4>
//                 <p className="text-neutral-600 dark:text-neutral-400">@jessicadevis</p>
//               </div>
//             </div>
//             <p className="text-neutral-600 dark:text-neutral-400 mb-4">The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 🎉</p>
//             <div className="flex justify-between items-center pt-10">
//               <a href="#" className="text-green-600 dark:text-green-400 font-medium">See on <BsTwitterX className="inline text-black dark:text-neutral-400" size={16} /></a>
//               <span className="text-neutral-500 dark:text-neutral-400">Jan 17, 2024</span>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
//             <div className="flex items-center mb-4">
//               <img src="/users/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="Mary Joshiash" className="w-12 h-12 rounded-full object-cover mr-4"/>
//               <div>
//                 <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Mary Joshiash <BadgeCheck className="inline text-blue-500" size={16} /></h4>
//                 <p className="text-neutral-600 dark:text-neutral-400">@maryjoshiash</p>
//               </div>
//             </div>
//             <p className="text-neutral-600 dark:text-neutral-400 mb-4">It's like having a superpower in your toolkit. The ability to craft custom designs quickly and efficiently with simple classes is unparalleled.</p>
//             <div className="flex justify-between items-center pt-4">
//               <a href="#" className="text-green-600 dark:text-green-400 font-medium">See on <BsTwitterX className="inline text-black dark:text-neutral-400" size={16} /></a>
//               <span className="text-neutral-500 dark:text-neutral-400">Jan 18, 2024</span>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
//             <div className="flex items-center mb-4">
//               <img src="/path/to/image3.jpg" alt="Marcell Glock" className="w-12 h-12 rounded-full object-cover mr-4"/>
//               <div>
//                 <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Marcell Glock <BadgeCheck className="inline text-blue-500" size={16} /></h4>
//                 <p className="text-neutral-600 dark:text-neutral-400">@MarcelGlock</p>
//               </div>
//             </div>
//             <p className="text-neutral-600 dark:text-neutral-400 mb-4">The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 😍</p>
//             <div className="flex justify-between items-center pt-10">
//               <a href="#" className="text-green-600 dark:text-green-400 font-medium">See on <BsTwitterX className="inline text-black dark:text-neutral-400" size={16} /></a>
//               <span className="text-neutral-500 dark:text-neutral-400">Jan 19, 2024</span>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
//             <div className="flex items-center mb-4">
//               <img src="/path/to/image4.jpg" alt="Linde Michele" className="w-12 h-12 rounded-full object-cover mr-4"/>
//               <div>
//                 <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Linde Michele <BadgeCheck className="inline text-blue-500" size={16} /></h4>
//                 <p className="text-neutral-600 dark:text-neutral-400">@lindemichele</p>
//               </div>
//             </div>
//             <p className="text-neutral-600 dark:text-neutral-400 mb-4">With its clear and concise classes, I can easily communicate design intentions to my colleagues. It's a must-have tool for any web developer. 👩🏽‍💻</p>
//             <div className="flex justify-between items-center">
//               <a href="#" className="text-green-600 dark:text-green-400 font-medium">See on <BsTwitterX className="inline text-black dark:text-neutral-400" size={16} /></a>
//               <span className="text-neutral-500 dark:text-neutral-400">Jan 20, 2024</span>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
//             <div className="flex items-center mb-4">
//               <img src="/path/to/image5.jpg" alt="Lucian Eurel" className="w-12 h-12 rounded-full object-cover mr-4"/>
//               <div>
//                 <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Lucian Eurel <BadgeCheck className="inline text-blue-500" size={16} /></h4>
//                 <p className="text-neutral-600 dark:text-neutral-400">@lucianeurel</p>
//               </div>
//             </div>
//             <p className="text-neutral-600 dark:text-neutral-400 mb-4">I've tried several CSS frameworks, but @MaterialTailwind is on a whole different level. It strikes the perfect balance between flexibility and design.</p>
//             <div className="flex justify-between items-center">
//               <a href="#" className="text-green-600 dark:text-green-400 font-medium">See on <BsTwitterX className="inline text-black dark:text-neutral-400" size={16} /></a>
//               <span className="text-neutral-500 dark:text-neutral-400">Jan 21, 2024</span>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
//             <div className="flex items-center mb-4">
//               <img src="/users/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="Misha Stam" className="w-12 h-12 rounded-full object-cover mr-4"/>
//               <div>
//                 <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Misha Stam <BadgeCheck className="inline text-blue-500" size={16} /></h4>
//                 <p className="text-neutral-600 dark:text-neutral-400">@mishastam</p>
//               </div>
//             </div>
//             <p className="text-neutral-600 dark:text-neutral-400 mb-4">Active community support make it easy to get started. It's the ideal framework for achieving @Material Design excellence in web applications.</p>
//             <div className="flex justify-between items-center">
//               <a href="#" className="text-green-600 dark:text-green-400 font-medium">See on <BsTwitterX className="inline text-black dark:text-neutral-400" size={16} /></a>
//               <span className="text-neutral-500 dark:text-neutral-400">Jan 22, 2024</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
