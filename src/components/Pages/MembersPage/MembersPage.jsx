import { useDispatch, useSelector } from "react-redux";
import Nav from "../../Shared/Nav/Nav";
import "../MembersPage/MembersPage.css";
import { useEffect } from "react";

export default function MembersPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MEMBERS" });
  }, []);

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
                <ul className="member" key={id}>
                  <img
                    className="member-headshot"
                    src={member.headshot}
                    alt="member-headshot"
                  />
                  <div className="member-info">
                    <header className="member-name">
                      <li>{member.name}</li>
                    </header>
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
