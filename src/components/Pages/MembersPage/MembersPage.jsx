import { useSelector } from "react-redux";
import Nav from "../../Shared/Nav/Nav";

export default function MembersPage() {
  const members = useSelector((store) => store.membersReducer.memberInfo);

  console.log(members);
  return (
    <>
      <div className="member-page-container">
        <Nav />
        <div className="members-section">
          <header>
            <h1>Our Members</h1>
          </header>
          <div className="members-list">
            {members.map((member, id) => {
              return (
                <ul key={id}>
                  <li>{member.name}</li>
                  <li>{member.image}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
