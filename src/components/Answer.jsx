import React, { useEffect } from 'react'
import { useState } from 'react'
import { Check, Replace } from '../helper'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


const Answer = ({ans,totalResult,index, type}) => {

    const [heading, setHeading] = useState(false);
    const [answer, setAnswer] = useState(ans);


    useEffect(()=>{
        // console.log(ans,key)
        if(Check(ans)){
            setHeading(true);
            setAnswer(Replace(ans))
        }

    },[])


    const render={
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={dark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }

    }

  
    
  return (
    <div>
     {index==0 && totalResult>1?<span className="pt-2 text-3xl block dark:text-white text-zinc-800">{answer}</span>:
     heading?<span className={'pt-1 text-2xl block dark:text-white text-zinc-800'}>{answer}</span>:
     <span className={type=='q'?'pl-1 ':'pl-5'}>
      <ReactMarkdown components={render}>{answer}</ReactMarkdown>
     </span>
  }
    </div>
  )
}

export default Answer
