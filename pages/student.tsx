type StudentProps = {
  id: number;
  name: string;
  email: string;
};

type StudentListProps = {
  students: StudentProps[];
};

export default function Student({ students }: StudentListProps) {
  return (
    <div>
      <h1>Students</h1>
      <div className="gap-4 flex">
        {students.map((student) => (
          <div key={student.id} className="bg-accent text-invert p-3">
            <p>{student.name}</p>
            <p>{student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/?_limit=2"
  );
  const students = await res.json();

  return {
    props: {
      students,
    },
  };
}
