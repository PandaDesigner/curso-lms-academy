import { CONSTANTS } from '@/components/Shared';
import { BookOpen, ChartArea, GraduationCap, House, LucideProps, Settings2, SquareTerminal } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface RouterMenuInterface {
    title: string,
    url: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

type RouteType = Array<RouterMenuInterface>;

export const routes: RouteType = [
    {
        title: CONSTANTS.home,
        url: "/",
        icon: House
    },
    {
        title: CONSTANTS.courses,
        url: "/courses",
        icon: SquareTerminal
    },
    {
        title: CONSTANTS.my_courses,
        url: "/my-courses",
        icon: BookOpen
    },
    {
        title: CONSTANTS.settings,
        url: "/setting",
        icon: Settings2
    },
]

export const routesTeachers: RouteType = [
    {
        title: CONSTANTS.courses,
        url: "/teacher",
        icon: GraduationCap
    },
    {
        title: CONSTANTS.analytics,
        url: '/teacher/analytics',
        icon: ChartArea
    }
]
