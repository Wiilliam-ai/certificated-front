import { SectionCourses } from './components/SectionCourses'
import { SectionTallers } from './components/SectionTallers'
import { SectionWebinars } from './components/SectionWebinars'

export const HomeView = () => {
  return (
    <div className="animate-fadeIn max-w-7xl mx-auto space-y-3">
      <SectionCourses />
      <SectionTallers />
      <SectionWebinars />
    </div>
  )
}
