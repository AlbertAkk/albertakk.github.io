interface Person {
  name: string
  position: string
}

const Person = ({ name, position }: Person) => {
  return (
    <div className={`person${name.split(' ')[0]}`}>
      <div className="personImage"></div>
      <div className="personNamePos">
        <p className="personName">{name}</p>
        <p className="personPosition">{position}</p>
      </div>
    </div>
  )
}

export default Person
