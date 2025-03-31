import React from 'react'
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const Issuespage = () => {
  return (
    <div><button><Link href='/issues/new'>New Issue</Link></button></div>
  )
}

export default Issuespage