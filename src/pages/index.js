import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi everyone</h1>
    <p>My name is Catalin.</p>
    <p> I know how to code in C/C++, C# and Java (although I started with BASIC when I was very young).  
      After that I know, to a certain extent, in descending order of knowledge: Python, JS, Ruby, Go, Clojure, Erlang.</p>
    <p>I've went to Hackatown (Ecole Polytechnique) and ConUHacks II,  as well as a few GameJams.</p>
    <p>I've just finished an 18-month internship at Genetec.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
