import { useEffect, useState } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Explore } from './pages/explore/Explore'
import { PageDetails } from './pages/details/PageDetails'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { PageNotFound } from './pages/404/PageNotFound'
import { SearchResult } from './pages/searchResult/SearchResult'


function App() {
  const {url} = useSelector((state => state.home) )
  const dispatch = useDispatch()
  useEffect(() =>{
    apiTesting()
  }, [])
  const apiTesting = () => {
    fetchDataFromApi('movie/popular').then((res) => {
      dispatch(getApiConfiguration(res))
    })
  }

  return (
    <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<PageDetails />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
  )
}

export default App
