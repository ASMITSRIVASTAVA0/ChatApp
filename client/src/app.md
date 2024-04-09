{/* agar same path to pehle wala chlega */}

            {/* <Route path="/" element={<Home/>}/> */}

            < Route 
            path="/" 
            element={
              <ProtectRoute user={user}>
                <Home/>
              </ProtectRoute>
            }
            />


            <Route path="/chat/:chatId" element={<Chat/>}/>
            {/* :chatid dena compulsary  */}
            <Route path="/groups" element={<Groups/>}/>
            {/* home lazy function se return hua, dynamic loading */}
            <Route path="/login" element={<Login/>}/>
            
        </Routes>