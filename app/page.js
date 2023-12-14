import Image from 'next/image'
import TopicsList from './components/TopicsList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
     <TopicsList />
     
    </main>
  )
}
