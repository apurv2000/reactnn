import PropTypes from 'prop-types'
import React, { Component,useEffect,useState } from 'react'
import Navbar from './Navbar'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

//import PropTypes from 'prop-types'
const News =(props)=> {

    const[article,setArticle]=useState([])
    const[Loading,setLoading]=useState(true)
    const[page,setPage]=useState(1)
    const[totalResults,settotalResults]=useState(0)
    // 
    const cap =function(string){
      return  string.charAt(0).toUpperCase() + string.slice(1);
     }


 const update=async()=>{
    props.setprogress(0); 
     console.log(process.env)
  let url=`${process.env.REACT_APP_API_A}?country=${props.country}&category=${props.category}&page=${page}&apikey=${props.apikey}&pageSize=${props.pageno}`;
 
  let data= await fetch(url);
 
  let parsedata= await data.json();

  setArticle(parsedata.articles)
  settotalResults(parsedata.totalResults)
 

 
  props.setprogress(100);


}
useEffect(()=>{
  document.title=`${cap(props.category)} - RealNews`;
  update()
},[])
const handlepre =async()=>{
setPage(page-1);
update();
    
}
const handlenext = async()=>{
  setPage(page+1);
  update();
      
   
}

 const fetchMoreData= async()=>{
  this.setState({
    page:this.state.page + 1

  });
  const url=(`${process.env.REACT_APP_API_A}?country=${props.country}&category=${props.category}&page=${this.state.page+1}&pageSize=${props.pageno}`,{
    method: 'post',
      headers: {'Content-Type': 'application/json'},
  });
  this.setState({
    loading:true
  });
   let data= await fetch(url);
let parsedata= await data.json();

this.setState({
totalResults:parsedata.totalResults,
article:this.state.article.concate( parsedata.articles),
loading:false,
});
 }

  
    return (<>  
    <Navbar toggleMode={props.toggleMode} mode={props.mode}/>
      <h1 className={`text-center my-5 mg-3  text-${props.mode=='dark'?'light':'dark'}`}>RealNews - Top HeadLine on {cap(props.category)}</h1>
      {/* <h1 className='text-center'>{this.state.loading && <Spinner/>}</h1> */}
     
        {/* <InfiniteScroll
        dataLength={this.state.article?.length}
        next={this.fetchMoreData}
        hasMore={this.state.article?.length !== this.state.totalResults}
        loader={<h4><Spinner/></h4>}
        > */}
        <div className='container my-3'>
       <div className='row my-4 container'>
            {article?.map((el)=>{
                return <div className='col-md-4'><Newsitem  key={el.url} title={el.title} description={el.description} url={el.urlToImage} newsurl={el.url} author={el.author} date={el.publishedAt} source={el.source.name}/></div>
            })
          } 
            
    </div>
    </div>
    {/* </InfiniteScroll> */}
    
 
   
    <div className='container mx-3 d-flex justify-content-between'>
        <button disabled={page<=1} type='button' className={`btn btn-${props.mode==='light'?'dark':'light'} mx-3`} onClick={handlepre}> &larr; previous</button>
        <button disabled={page+1> Math.ceil(totalResults/props.pageno)} type='button' className={`btn btn-${props.mode==='light'?'dark':'light'} mx-3`} onClick={handlenext}>next &rarr;</button>
    </div>
    </>
    
    )
  }


News.defaultProps={
  country:'in',
  pageno:8,
  category:'general'
}

News.propTypes={
  country:PropTypes.string,
  pageno:PropTypes.number,
  category:PropTypes.string
}
export default News