import { useDispatch, useSelector } from "react-redux";
import Nav from "../../Shared/Nav/Nav";
import "../MembersPage/MembersPage.css";
import { useEffect, useRef } from "react";

export default function MembersPage() {
  const dispatch = useDispatch();
  const membersList = useRef(null);

  useEffect(() => {
    dispatch({ type: "FETCH_MEMBERS" });
  }, []);

  const handleMemberScroll = () => {
    membersList.current?.scrollIntoView({ behavior: "smooth" });
  };

  const members = useSelector((store) => store.membersReducer.memberInfo);
  console.log(members);
  return (
    <>
      <div className="member-page-container">
        <div className="member-page-top">
          <Nav />
          <div className="member-page-title-container">
            <header className="member-page-header">
              <h1 className="member-page-title text-blue-950">
                Meet our members
              </h1>
            </header>
            <div className="member-page-info">
              <p className="text-2xl pt-10">
                Here at the Northern Lights Poker Tour, our members are our
                driving force. Without the continued support show from them,
                this group would not be no more. We currently have 11 active
                members and are always looking for more individuals that not
                only love poker, but love creating and strengthening bonds and
                relationships with the membership.
              </p>
              <div className="member-page-title-btn-container">
                <p className="text-2xl">Check out our great members below.</p>
                <button
                  className="member-page-title-btn"
                  onClick={handleMemberScroll}
                >
                  Members
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={membersList} className="members-section">
          <header className="members-list-header">
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
                    <header className="member-info-header">
                      <li className="member-name">{member.name}</li>
                      <li className="member-type">{member.member_type}</li>
                    </header>
                    <div className="member-info-body">
                      <li>Age: {member.age}</li>
                      <li>DOB: {member.birthday}</li>
                      <li>Birthplace: {member.birthplace}</li>
                    </div>
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
