import { GUIDE_ENUMS } from "@/app/enums/guide_enums";
import Link from "next/link";
import React from "react";
import { StartButton } from "../Buttons/StartButton/StartButton";

export const Section2 = () => {
  return (
    <div className="h-full w-full pt-8">
      <div className="flex justify-center">
        <div className="flex w-5/6 ">
          <div className="flex w-full flex-col  gap-8 pb-6">
            <h1 className="titleText self-center">Section 2 </h1>
            <div className="bg-white p-6 rounded-md border-2 w-fullshadow-sm ">
              <div className="flex gap-2">
                <p className="sectionTitle ">Leadership Simulation 1</p>
              </div>
              <div>
                <br />
                <p className="instructionText ">
                  Instruct the candidate to read over the following information.
                  When he/she is finished, he/she will be playing the role
                  described in the instructions. You will also ask him/her a
                  number of questions regarding the situation. Have the
                  candidate tell you when he/she is ready.
                </p>
                <br />
                <p className="instructionTextItalic ">
                  While the candidate is reading over the situation, make your
                  ratings of the candidate on the evaluation form.
                </p>
                <br />
                <p className="instructionText ">
                  Make sure he/she has the participant handout with information
                  on the two leadership simulations. Ask if he/she has any
                  questions.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-md border-2 w-full shadow-sm ">
              <div className="flex flex-col gap-2">
                <p className="sectionTitle ">Instructions for Participant</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-lime-100 px-8 py-4 rounded-md">
                  <div>
                    <h1 className="sectionTitleItalic ">
                      General Background Information
                    </h1>
                    <br />
                    <p className="instructionText ">
                      You've just been selected as the production manager for a
                      new manufacturing firm. The firm will be operating in a
                      team-based format although there is currently very little
                      structure. You have 5 group leaders that report to you.
                      Each group leader oversees 3 - 5 teams, each consisting of
                      4 - 8 team members. Currently, there are no team leaders
                      in place for the teams; in fact, the team members are
                      currently being selected and will not be 3Center for
                      Leadership Studies Page in the facility for about two
                      weeks. Manufacturing machinery has been delivered and
                      final installations are ongoing now. Plans are to begin
                      production within three weeks.
                    </p>
                    <br />
                    <p className="instructionText ">
                      You have never met your group leaders although you've
                      heard that they are technically competent with at least
                      some supervisory experience. This is a brand new facility
                      and as yet there are no clear vision and strategies to
                      implement the teams, to determine how things should run,
                      what the rules are, etc. As it relates to the
                      manufacturing side of the plant, establishing those things
                      is your responsibility.
                    </p>
                  </div>
                </div>
                <div className="bg-lime-100 px-8 py-4 rounded-md">
                  <div>
                    <h1 className="sectionTitleItalic ">Your Task</h1>
                    <br />
                    <p className="instructionText ">
                      You have about 5 minutes to think about this situation and
                      determine how you would like to approach it. You will be
                      meeting with one of your group leaders in about 5 minutes
                      and you need to give him/her an overview of your
                      philosophy for the facility, what general things you want
                      to cover, short and/or long term plans/goals, etc.
                      Essentially you need to let him/her know your general
                      plans, style of leadership, expectations, etc. You can ask
                      questions of the group leader if you like, although he/she
                      may not be able to answer all your questions. You will be
                      able to spend about 10 minutes with the group leader.
                    </p>
                  </div>
                </div>
                <div className="bg-lime-100 px-8 py-4 rounded-md">
                  <div>
                    <h1 className="sectionTitleItalic ">Keep in Mind</h1>
                    <br />
                    <p className="instructionText ">
                      There are no right or wrong answers. You are free to
                      structure this meeting, the facility, etc., any way that
                      you feel most comfortable. Treat the group leader as if
                      he/she actually were one of your group leaders.
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="bg-lime-300 p-8 rounded-md">
                        <h1 className="sectionTitle ">
                          Role Player Instructions:
                        </h1>
                        <p className="instructionText ">
                          In this simulation, you will be playing the role of a
                          Group Leader who reports to the participant, who is
                          assuming the role of manufacturing manager.
                        </p>
                      </div>
                      <div className="bg-lime-300 p-8 rounded-md">
                        <h1 className="sectionTitle ">
                          Information to Keep in Mind:
                        </h1>
                        <ul className="instructionText">
                          <li>
                            Let the participant manage the interaction. He/she
                            should do 80% of the talking.
                          </li>
                          <li>
                            Be receptive to the participant and let him/her
                            guide the discussion. You may want to take notes if
                            you like, but primarily your role is to listen to
                            what he/she has to say.
                          </li>
                          <li>
                            Background Information. Don't offer this information
                            to the participant, but if he/she probes, then
                            provide as needed.
                            <ol className="px-10">
                              <li>
                                You were just hired into your current position.
                                You're not sure which area you'll be in charge
                                of yet; all you know is that you will be one of
                                the group leaders.
                              </li>
                              <li>
                                You have 3 years of experience working as a
                                group leader at another facility that was
                                working in a team-based environment.
                              </li>
                              <li>
                                You enjoyed working at the other facility; but
                                because the management team wasn't very
                                committed to the process, it was really
                                frustrating, e.g., lack of empowerment to make
                                decisions, poor team structure and
                                communication, etc. You're interested in this
                                opportunity because it's a clean slate.
                              </li>
                              <li>
                                You have 5 years general manufacturing
                                experience and have an associate's degree in
                                industrial engineering.
                              </li>
                              <li>
                                You believe that teams can work and are a good
                                strategy. You also believe that they are not as
                                easy to implement as most people assume and
                                therefore you have some concerns. You want to
                                make sure this is done right.
                              </li>
                            </ol>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-lime-300 p-8 rounded-md">
                        <h1 className="sectionTitle ">
                          Problems to Introduce:
                        </h1>
                        <p className="instructionText ">
                          The following are some concerns/problems/objections
                          that you will need to pose to the participant whenever
                          you feel it appropriate, i.e., when it seems natural.
                          You don't need to pose all of these objectives but
                          should pose at least 2 that seem relevant based on the
                          participant's approach to the facility.
                        </p>
                        <ul className="instructionText px-6">
                          <li>
                            You've been talking with some of the other new group
                            leaders and you think that a few of them are very
                            traditional in their beliefs about how employees and
                            managers should interact and you're sure that it's
                            going to create some big problems.
                          </li>
                          <li>
                            If the participant presents a structure that is very
                            open in terms of lines of authority, strictness,
                            etc., say that you think that one of the biggest
                            problems you've seen is when people's roles weren't
                            clearly defined and there was too much ambiguity.
                            You think there may be some real problems.
                          </li>
                          <li>
                            If the participant presents a structure that is very
                            tight (strict) in terms of lines of authority,
                            strictness, etc., say that you think that one of the
                            biggest problems you've seen is when managers
                            created structures that were too confining and
                            dramatically reduced people's ability to make
                            decisions. You think there may be some real
                            problems.
                            <li>
                              You're concerned that the participant's ideas
                              sound real good but you've got doubts about how
                              well the team members are going to react to it
                              because (a) it's too new, too much for them at
                              once, or (b) it's too traditional, it's not open
                              enough.
                            </li>
                          </li>
                        </ul>
                        <p className="instructionText ">
                          After the interaction has finished, tell the
                          participant that you are now &quot;out of role&quot;,
                          i.e., no longer playing the role of group leader, and
                          you have a few questions. Ask the following questions:
                        </p>
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-4 w-full px-4 bg-lime-500 rounded-md	">
                            <div className="w-1/5">
                              <p className="instructionText ">Question 1:</p>
                            </div>
                            <div className="w-4/5">
                              <p className="instructionText ">
                                What are the primary obstacles, if any, that you
                                see implementing your vision for the facility?
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 w-full px-4 bg-lime-500 rounded-md">
                            <div className="w-1/5">
                              <p className="instructionText ">Question 2:</p>
                            </div>
                            <div className="w-4/5">
                              <p className="instructionText ">
                                Assume that you've been able to implement your
                                plan. Tell me about where you see the facility,
                                the group, etc., in 3 - 5 years. In other words,
                                what will be the result of your plan?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-md border-2 w-fullshadow-sm ">
              <div>
                <p className="instructionTextItalic ">
                  Transition to the next section. "I would like to ask you a few
                  questions now about your work experiences." [Adapting to
                  Change]
                </p>
              </div>
            </div>
            <div className="self-center w-1/3">
              <Link
                href={{
                  pathname: "/BIGuide/GuideSection",
                  query: {
                    section: GUIDE_ENUMS.SECTION3,
                  },
                }}
              >
                <StartButton buttonText={"Section 3"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
