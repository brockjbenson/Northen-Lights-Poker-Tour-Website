import { useSelector } from "react-redux";
import Nav from "../../Shared/Nav/Nav";
import "../MembersPage/MembersPage.css";

export default function MembersPage() {
  const members = useSelector((store) => store.membersReducer.memberInfo);

  console.log(members);
  return (
    <>
      <div className="member-page-container">
        <Nav />
        <div className="members-section">
          <header className="members-header">
            <h1>Our Members</h1>
          </header>
          <div className="members-list">
            {members.map((member, id) => {
              return (
                <ul key={id}>
                  <header className="member-name">
                    <li>{member.name}</li>
                  </header>
                  <div className="member-info">
                    <li>
                      {member.birthday} Age {member.age}
                    </li>
                    <li>Birthplace {member.birthplace}</li>
                  </div>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
