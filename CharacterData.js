// sub categories are listed as 'children' in a list
// if it has children it needs 'expanded: false' as an attribute
// everything starts as 'completed: false"


export default CharacterData = [{
    name: 'medusa',
    image: './images/medusa.jpg',
    inspections: [
        {
            name: 'inspect eyes',
            completed: false,
            expanded:false,
            children: [
                {
                    name: 'inspect pupil', completed: false, results:'you turned to stone'
                }]
        }]
}]

