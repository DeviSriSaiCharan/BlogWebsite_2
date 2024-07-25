
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Navbar from './maincomponents/Navbar';


function App() {

  // useEffect(() =>{

  //   let navbar = '';

  //   if(document.title in ['signIn', 'signUp']){
  //     navbar = '';
  //   }
  //   else{
  //     navbar = <Navbar/>
  //   }
  // })

  return (
    <div>
      <BrowserRouter>
     
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route path="/" element={<Home />}>
           
            {/* Additional nested routes for other pages */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/explore" element={<Explore />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* ... */}
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App


{/* <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="*" element={<NotFound />} /> */}