import Link from "next/link";
import React from "react";
import { StartButton } from "../Buttons/StartButton/StartButton";
import { GUIDE_ENUMS } from "@/app/enums/guide_enums";
import diagram from "./diagram.png";
import Image from "next/image";

export const Section4 = () => {
  return (
    <div className="h-full w-full pt-8">
      <div className="flex justify-center">
        <div className="flex w-5/6 ">
          <div className="flex w-full flex-col  gap-8 pb-6">
            <h1 className="titleText self-center">Section 4 </h1>
            <div className="bg-white p-6 rounded-md border-2 w-fullshadow-sm ">
              <div className="flex gap-2">
                <p className="sectionTitle ">Leadership Simulation 2</p>
              </div>
              <div>
                <br />
                <p className="instructionText ">
                  Instruct the candidate to read over the instructions and
                  prepare for the next exercise. Tell the candidate to read all
                  the information about his/her role, the company, and prepare
                  for the interaction. This should take approximately 5 minutes.
                  Instruct the candidate to let you know when he/she is ready.
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
                      You work as an area manager at one of your company&#39;s
                      largest call centers. Your direct line of reports is shown
                      in the diagram below.
                    </p>
                    <Image src={diagram} className="w-5/6" alt="diagram" />
                    <br />
                    <p className="instructionText ">
                      As you can see from the diagram, you have 6 group leaders
                      who report directly to you. Each group leader has 10 team
                      leaders as direct reports. Each team leader overviews a
                      team of approximately 15 team members. In total, there are
                      over 900 employees who report directly or indirectly to
                      you.
                    </p>
                    <br />
                    <p className="instructionText ">
                      One of your group leaders, Kerri, has been having a lot of
                      problems with the teams that report to him/her, and
                      especially with 3 of them. Overall, the performance of
                      Kerri&#39;s group (approximately 150 employees) has been
                      less than acceptable for the past two months. You
                      mentioned your concern with him/her once about 4 weeks
                      ago. Kerri assured you that (s)he would take care of the
                      problems. Unfortunately, nothing has changed since then.
                    </p>
                    <br />
                    <div className="bg-lime-300 px-8 py-4 rounded-md">
                      <h1 className="sectionTitle ">
                        The primary problems seem to be as follows:
                      </h1>

                      <ul className="instructionText px-6">
                        <li>
                          There is a high level of absenteeism on 3 of his/her
                          teams (teams 1, 3, 5) for the past 3 months and the
                          past month it was much higher. Team members are
                          allowed 5 personal health days during the year in
                          addition to vacation days and medical leave days for
                          serious problems. Most team members don&#39;t use
                          these personal leave days, but it&#39;s common
                          knowledge that some team members &quot;work the
                          system&quot; and use up Group Leaders (2) Team Leaders
                          (10) Group Leaders (2) Group Leaders (2) Team Leaders
                          (10) Team Leaders (10) Area Manager YOU 7Center for
                          Leadership Studies Page all 5 days. Over the past
                          month there has been a high amount of personal leave
                          days on these 3 teams causing them to use temporary
                          employees as replacements.
                        </li>
                        <li>
                          In addition to the absenteeism, these three teams have
                          had a high level of missed production goals (i.e.,
                          calls per hour) and service problems (e.g., customer
                          complaints, recalls, etc.), which is probably
                          associated with the heavy reliance on temporary
                          employees. This level of quality and production
                          problems is clearly unacceptable and needs to be
                          resolved quickly.
                        </li>
                      </ul>
                    </div>
                    <br />
                    <p className="instructionText ">
                      Kerri&#39;s a young leader who you feel has a lot of
                      potential. At the same time, (s)he has a lot of problems
                      relating to others because (s)he is such a perfectionist
                      and tough disciplinarian. (S)he expects a lot of
                      himself/herself and expects the same high standards from
                      others. This is why Kerri has moved up so quickly in the
                      organization after starting only 2 years ago as a team
                      member. You feel that Kerri needs to develop skills in
                      effectively demanding high standards of others without
                      alienating them. You asked Kerri to stop by and talk about
                      what&#39;s happening on his/her team and what to do about
                      it to get things turned around. Your schedule is pretty
                      busy and you only have about 15 minutes to talk with
                      Kerri. Also, you&#39;re going to be out of the plant for
                      the next 3 days at a training seminar.
                    </p>
                  </div>
                </div>

                <div className="bg-lime-100 px-8 py-4 rounded-md">
                  <div>
                    <h1 className="sectionTitleItalic ">Keep in Mind</h1>

                    <div className="flex flex-col gap-4">
                      <div className="bg-lime-300 px-8 py-4 rounded-md">
                        <h1 className="sectionTitle ">
                          Role Player Instructions:
                        </h1>
                        <p className="instructionText ">
                          In this simulation, you will be playing the role of
                          Kerri, one of 6 group leaders who report to the
                          participant.
                        </p>
                      </div>
                      <div className="bg-lime-300 p-8 rounded-md">
                        <h1 className="sectionTitle ">
                          Information to Keep in Mind:
                        </h1>
                        <ul className="instructionText">
                          <li>
                            Let the participant manage the interaction. He/she
                            should do 60 - 70% of the talking.
                          </li>
                          <li>
                            You are a person who sets high standards for
                            yourself and expects the same from others. You
                            don&#39;t tolerate people being lazy or doing sloppy
                            work. You&#39;ve made that clear to all of your team
                            leaders.
                          </li>
                          <li>
                            You are usually the first person to work and the
                            last one to leave (at least on your shift). You
                            moved up quickly after starting here as a team
                            member two years ago. You are a very hard worker and
                            are always willing to help out. You took over as
                            group leader of this group 6 months ago after being
                            a team leader on one of the teams.
                          </li>
                          <li>
                            You have been very frustrated since taking over as
                            group leader because 3 of the teams that report to
                            you have been performing poorly and not even coming
                            close to meeting your expectations. You&#39;ve
                            talked to the team leaders for these teams many
                            times and told them that you won&#39;t tolerate this
                            level of mediocrity from your teams.
                          </li>

                          <li>
                            Occasionally, you&#39;ve even gone down on the floor
                            and pulled the teams aside during a break and
                            explained to them that you expect more from them and
                            are not satisfied. 8Center for Leadership Studies
                            Page You told them that they couldn&#39;t use the
                            excuse that you don&#39;t know the job because you
                            know it as well or better than any of them,
                            including the team leader.
                          </li>

                          <li>
                            Occasionally, you&#39;ve told the team members that
                            you don&#39;t care what the team leader says; you
                            have certain expectations of them and they need to
                            meet those standards.
                          </li>

                          <li>
                            You&#39;re a firm believer in goal setting and have
                            sat down with each of your team leaders over the
                            past 6 months and set goals for them to achieve.
                            Since you&#39;re still not that familiar with the
                            specific weaknesses and strengths of each team,
                            you&#39;ve decided to set the same goals for each
                            team. These are the same goals you set for your team
                            when you were a team leader and you expect nothing
                            less of the other teams.
                            <ol className="px-10">
                              <li>
                                Each team should have an outstanding customer
                                satisfaction rating (no more than 1 complaint
                                per month and less than 0.5% recalls per month
                                (customers recall because they did not receive
                                satisfactory information the first time).
                              </li>
                              <li>
                                Each team should be at 97% productivity at all
                                times (should be meeting their calls-per-hour
                                goals at least 97% of the time).
                              </li>
                              <li>
                                Each team should generate at lest 15 improvement
                                ideas per month. This is about one per person
                                per month.
                              </li>
                              <li>
                                Team members should take no more than 1 personal
                                day per year.
                              </li>
                            </ol>
                          </li>
                          <li>
                            Remember that you are a very strong-willed,
                            self-confident, driven individual who sets extremely
                            high standards. You are frustrated with people who
                            &quot;can&#39;t keep up&quot;, and view them as weak
                            and lazy.
                          </li>

                          <li>
                            You&#39;re more than willing to help people achieve
                            their goals, but you are very impatient with people
                            who aren&#39;t willing to try.
                          </li>

                          <li>
                            You feel that the basic problem with your teams is
                            that your team leaders aren&#39;t pushing hard
                            enough and haven&#39;t truly adopted your philosophy
                            of work.
                          </li>
                          <li>
                            You feel very frustrated with the results you&#39;ve
                            been getting and feel that the way to solve it is to
                            push harder. You don&#39;t want to lower your
                            standards.
                          </li>
                        </ul>
                      </div>
                      <div className="bg-lime-300 p-8 rounded-md">
                        <h1 className="sectionTitle ">Playing the Role:</h1>

                        <ul className="instructionText px-6">
                          <li>
                            Let the participant draw this information out of
                            you. Present bits and pieces of information that you
                            feel are relevant when asked. Respond naturally to
                            his/her inquiries and present as much information as
                            you feel is necessary.
                          </li>
                          <li>
                            Be open to the participant&#39;s
                            suggestions/recommendations, but say that you are
                            reluctant to lower your standards.
                          </li>
                          <li>Let the participant guide the discussion.</li>
                        </ul>
                      </div>
                      <p className="instructionText ">
                        After the interaction has finished, tell the participant
                        that you are now &quot;out of role&quot;, i.e., no
                        longer playing the role of Kerri, and you have a few
                        questions. Ask the following questions:
                      </p>
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-4 w-full px-4 bg-lime-500 rounded-md	">
                          <div className="w-1/5">
                            <p className="instructionText ">Question 1:</p>
                          </div>
                          <div className="w-4/5">
                            <p className="instructionText ">
                              How do you think the interaction went? Briefly
                              describe your thoughts on Kerri in your own words.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4 w-full px-4 bg-lime-500 rounded-md">
                          <div className="w-1/5">
                            <p className="instructionText ">Question 2:</p>
                          </div>
                          <div className="w-4/5">
                            <p className="instructionText ">
                              What would be your next steps, what needs to be
                              done?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-center w-1/3">
              <Link
                href={{
                  pathname: "/BIGuide/GuideSection",
                  query: {
                    section: GUIDE_ENUMS.SECTION5,
                  },
                }}
              >
                <StartButton buttonText={"Section 5"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
