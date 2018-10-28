import wepy from 'wepy';

export default class CourseMixin extends wepy.mixin {
    get_color(category) {
        switch (category) {
            case 'Lecture':
                return '#7874F2'
            case 'Discussion':
                return '#F87D42'
            case 'Laboratory':
                return '#F30E5C'
            case 'practicum':
                return '#CC99F9'
            default:
                return '#62929A'
        }
    }
    parse_course(courseList) {
        const course = []
        for (let i = 1; i <= 7; i++) {
            course.push([])
        }
        courseList.forEach((item) => {
            course[item.weeknum - 1].push({
                ...item,
                ids: (item.id.split('-')[0]).trim(),
                color: this.get_color(item.category)
            })
        })
        return course
    }
    async initCourse() {
        try {
            const res = await wepy.$http({
                url: '/schedule',
                method: 'get',
            })
            return this.parse_course(res.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}