
import Colors from './Colors'
import Fonts from './Fonts'

const styles = {
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    content: {
        flex: 1,
        backgroundColor: Colors.white
    },
    textTitle: {
        ...Fonts.style.title
    },
    shadow: {
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 8,
        paddingHorizontal: 10
    }
}

export default styles;
