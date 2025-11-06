'use client'

import { useState } from 'react'
import './styles.css'

export default function DisciplineBook() {
  const [currentChapter, setCurrentChapter] = useState('intro')
  const [bookmarkProgress, setBookmarkProgress] = useState(0)

  const chapters = {
    intro: {
      title: 'Introduction: The Foundation of Excellence',
      content: `Welcome to your journey toward mastery. This book is not about temporary motivation—it's about building an unshakeable foundation of discipline that will transform every aspect of your life.

Success is not an accident. It's the inevitable result of consistent action, unwavering focus, and adherence to fundamental principles that have stood the test of time.

In these pages, you'll discover:
• The true nature of discipline and why it's the ultimate superpower
• Proven frameworks for maintaining laser-sharp focus
• The non-negotiable rules that separate winners from wishers
• The five pillars that support all lasting achievement

This is not theory. This is battle-tested wisdom distilled into actionable principles you can implement immediately.

Your transformation begins now.`
    },
    discipline: {
      title: 'Chapter 1: The Discipline Equation',
      content: `Discipline = Freedom

This paradox confuses most people. They see discipline as restriction, as sacrifice, as suffering. They couldn't be more wrong.

Discipline is the bridge between goals and accomplishment. It's the compound interest of self-improvement. Every disciplined action you take today multiplies into exponential results tomorrow.

THE THREE LAWS OF DISCIPLINE:

1. The Law of Small Wins
Discipline isn't built through heroic acts—it's built through tiny, consistent actions. The person who does 10 push-ups every morning without fail is more disciplined than the person who does 100 push-ups once a month.

Action Step: Choose ONE small habit. Do it every day for 30 days. No exceptions. No negotiations.

2. The Law of Non-Negotiables
Discipline thrives on clarity. When something is negotiable, you waste energy deciding. When it's non-negotiable, you simply execute.

Create your list of non-negotiables:
• Wake up at _____
• Exercise for _____
• Deep work from _____
• Sleep by _____

3. The Law of Environmental Design
Willpower is finite. Your environment is infinite. Design your surroundings to make disciplined choices automatic and undisciplined choices difficult.

Remove friction from good habits. Add friction to bad habits.

THE DISCIPLINE DAILY PRACTICE:

Morning: Win the first hour. Your morning ritual sets the tone for your entire day.
Midday: Protect your peak performance hours. Guard them ruthlessly.
Evening: Review and reset. What worked? What needs adjustment?

Remember: Discipline is a muscle. The more you use it, the stronger it becomes.`
    },
    focus: {
      title: 'Chapter 2: The Focus Formula',
      content: `In a world of infinite distraction, focus is your competitive advantage.

Focus isn't about doing more—it's about doing less, better. It's about saying no to good opportunities so you can say yes to great ones.

THE FOCUS FRAMEWORK:

1. CLARITY OF TARGET
You can't hit a target you can't see. Before you can focus, you must know exactly what you're focusing on.

Exercise: Write down your ONE primary goal for the next 90 days. Everything else is secondary.

2. ELIMINATION RUTHLESSLY
Every yes is a thousand nos. Audit your life:
• What activities drain energy without producing results?
• What relationships consume time without adding value?
• What commitments were made by past-you that current-you no longer needs?

Cut them. All of them.

3. DEEP WORK BLOCKS
Shallow work is the enemy of excellence. Schedule minimum 90-minute blocks of uninterrupted deep work.

During deep work:
• Phone in another room
• Internet disconnected (or blocked)
• Door closed
• Single task only

4. THE RECOVERY PRINCIPLE
Focus is like a muscle—it needs recovery. Schedule deliberate rest:
• 5-minute breaks every 50 minutes
• Complete disconnection one day per week
• 2-week deep rest per year

THE FOCUS KILLERS TO ELIMINATE:

• Notifications (turn them ALL off)
• Social media scrolling (set strict time limits)
• Email checking (batch process twice daily)
• Multitasking (it's a lie—you're just task-switching poorly)
• Meetings without clear agendas (decline them)

FOCUS MAINTENANCE PROTOCOL:

Morning: Set your ONE priority for the day
During: Protect that priority with your life
Evening: Did you complete it? If no, why not?

Your ability to focus determines your ceiling of achievement.`
    },
    rules: {
      title: 'Chapter 3: The 12 Non-Negotiable Rules',
      content: `Success leaves clues. These rules are the pattern recognition from thousands of high achievers across every domain.

RULE 1: Start Before You Feel Ready
Confidence comes from action, not the other way around. Waiting to feel ready is waiting forever.

RULE 2: Embrace Discomfort Daily
Growth lives outside your comfort zone. If you're comfortable, you're not growing.

RULE 3: Protect Your Morning
Win the morning, win the day. The first hour determines the next 23.

RULE 4: Move Your Body
Physical energy creates mental clarity. Exercise is non-negotiable.

RULE 5: Feed Your Mind Quality Input
You become what you consume. Read daily. Learn continuously. Choose your inputs carefully.

RULE 6: Manage Energy, Not Time
Time management is a myth. Energy management is the reality. Schedule your most important work during your peak energy hours.

RULE 7: Document Your Progress
What gets measured gets improved. Track your key metrics daily.

RULE 8: Fail Forward Fast
Failure isn't the opposite of success—it's the pathway to it. Fail quickly, learn rapidly, adjust constantly.

RULE 9: Surround Yourself With Excellence
You're the average of the five people you spend the most time with. Choose wisely.

RULE 10: Create More Than You Consume
Consumption is passive. Creation is active. Shift the ratio toward creation.

RULE 11: Review and Reflect Weekly
Without reflection, you're just busy. With reflection, you're improving. Sunday evening: What worked? What didn't? What changes for next week?

RULE 12: Sleep Is Sacred
All the discipline in the world can't overcome chronic sleep deprivation. Protect your 7-8 hours.

IMPLEMENTING THE RULES:

Don't try to implement all 12 tomorrow. Choose THREE rules to master this month. Once they're automatic, add three more.

Rules become rituals. Rituals become identity. Identity drives behavior effortlessly.`
    },
    pillars: {
      title: 'Chapter 4: The Five Pillars of Success',
      content: `Success isn't built on a single foundation—it's supported by five interconnected pillars. Neglect one, and the entire structure becomes unstable.

PILLAR 1: PHYSICAL VITALITY

Your body is the vehicle for all achievement. Without energy, nothing else matters.

Essential Elements:
• Movement: 30-60 minutes daily
• Nutrition: Whole foods, adequate protein, hydrated
• Sleep: 7-8 hours, consistent schedule
• Recovery: Active rest, stretching, massage

Implementation: Schedule physical activity like you schedule important meetings. Because it IS your most important meeting.

PILLAR 2: MENTAL CLARITY

A cluttered mind produces cluttered results. Clarity is power.

Essential Elements:
• Meditation: 10-20 minutes daily
• Journaling: Morning pages or evening reflection
• Learning: 30 minutes of reading daily
• Planning: Weekly reviews and daily priorities

Implementation: Create a morning mental clarity ritual. Before the world gets your attention, give yourself attention.

PILLAR 3: EMOTIONAL RESILIENCE

Success requires enduring setbacks without losing momentum. Emotional resilience is the shock absorber for life's inevitable challenges.

Essential Elements:
• Self-awareness: Regular emotional check-ins
• Stress management: Breathing exercises, nature time
• Gratitude practice: Daily appreciation journaling
• Relationships: Deep connections with supportive people

Implementation: When adversity strikes (not if, but when), respond instead of react. Pause. Breathe. Choose your response.

PILLAR 4: FINANCIAL FREEDOM

Money isn't everything, but financial stress destroys focus. Financial freedom creates options.

Essential Elements:
• Income: Continuously increase your earning capacity
• Savings: Automate 20% minimum
• Investing: Make your money work for you
• Spending: Conscious consumption, not mindless spending

Implementation: Every dollar is a soldier. Deploy them strategically toward your freedom, not your comfort.

PILLAR 5: PURPOSE & CONTRIBUTION

Success without meaning is emptiness with a nice car. True fulfillment comes from contributing something valuable to the world.

Essential Elements:
• Mission clarity: Why do you exist beyond yourself?
• Value creation: What problem do you solve?
• Service: How do you make others' lives better?
• Legacy: What will remain after you're gone?

Implementation: Ask yourself weekly: "Did my actions this week serve my purpose?" If no, adjust course.

THE INTEGRATION PRACTICE:

Each Sunday, rate each pillar 1-10:
• Physical Vitality: ___
• Mental Clarity: ___
• Emotional Resilience: ___
• Financial Freedom: ___
• Purpose & Contribution: ___

Your lowest score reveals your focus area for the upcoming week.

All five pillars must stand strong. Build them simultaneously, strengthen them continuously.`
    },
    systems: {
      title: 'Chapter 5: Building Systems That Win',
      content: `Goals are about results. Systems are about processes. Fall in love with the system, and the results take care of themselves.

THE SYSTEM MINDSET:

"I want to lose 20 pounds" is a goal.
"I eat protein and vegetables at every meal" is a system.

"I want to write a book" is a goal.
"I write 500 words every morning" is a system.

Goals are destination thinking. Systems are direction thinking.

CREATING YOUR SUCCESS SYSTEMS:

1. THE DAILY OPERATING SYSTEM

Morning System (First 90 minutes):
• Hydrate: 32oz water
• Move: 20-30 minute exercise
• Meditate: 10 minutes
• Plan: Review top 3 priorities

Deep Work System (3-4 hours):
• Single task focus
• No interruptions
• Phone off/away
• Timed blocks with breaks

Recovery System (Evening):
• Digital sunset 90 minutes before bed
• Reflection: 3 wins from today
• Gratitude: 3 things you're thankful for
• Preparation: Lay out tomorrow

2. THE WEEKLY OPTIMIZATION SYSTEM

Sunday Evening Review:
• Last week assessment (what worked/didn't work)
• Next week planning (schedule top priorities first)
• Goal progress check (measure key metrics)
• System adjustments (refine processes)

3. THE MONTHLY MOMENTUM SYSTEM

First Sunday of Month:
• Comprehensive life audit (all five pillars)
• Major goal review and recalibration
• New habit introduction (max one new habit)
• Celebration ritual (acknowledge progress)

4. THE QUARTERLY BREAKTHROUGH SYSTEM

Every 90 Days:
• Deep strategic review
• Major pivots if necessary
• Intensive skill development plan
• Environment redesign

SYSTEM OPTIMIZATION RULES:

• Start simple, then refine
• Measure what matters
• Automate the automatable
• Eliminate before you optimize
• Review and revise regularly

Your system is your edge. While others rely on motivation, you rely on process.`
    },
    obstacles: {
      title: 'Chapter 6: Overcoming the Inner Obstacles',
      content: `The biggest obstacles to your success aren't external—they're between your ears.

OBSTACLE 1: THE PERFECTIONISM TRAP

Perfectionism masquerades as high standards but is actually fear wearing a disguise. It's the voice that says "not good enough" before you even begin.

The Antidote: Action beats perfection. Ship the messy first draft. Launch the imperfect product. Have the awkward conversation. Done is better than perfect.

Mantra: "Progress, not perfection."

OBSTACLE 2: THE COMPARISON CURSE

Social media has turned comparison into a full-time sport. You're comparing your behind-the-scenes to everyone else's highlight reel.

The Antidote: Compete with yesterday's version of yourself. That's your only valid comparison. Everyone else is running a different race.

Daily Practice: "Am I 1% better than yesterday?" If yes, you're winning.

OBSTACLE 3: THE MOTIVATION MYTH

"I'll do it when I feel motivated" is the battle cry of the perpetually stuck. Motivation is fickle. Discipline is reliable.

The Antidote: Action creates motivation, not the other way around. Start moving, and momentum follows. The first step is always the hardest.

New Identity: "I'm the type of person who does it whether I feel like it or not."

OBSTACLE 4: THE FEAR OF JUDGMENT

The fear of what others think has killed more dreams than failure ever will. You're paralyzed by opinions of people who aren't even paying attention.

The Antidote: Those who matter don't mind. Those who mind don't matter. Your critics aren't in the arena. Their opinions are irrelevant.

Liberation Statement: "I release the need for approval from anyone but my future self."

OBSTACLE 5: THE DISTRACTION EPIDEMIC

Your attention is under constant siege. Every app, every notification, every ping is engineered to steal your focus.

The Antidote: Ruthless digital boundaries. Your phone is a tool, not a tyrant. Use Do Not Disturb liberally. Batch process communications. Protect your attention like your life depends on it—because it does.

Digital Detox Protocol: One full day per week, completely offline.

OBSTACLE 6: THE IDENTITY CONFLICT

You can't outperform your self-image. If you see yourself as "not a morning person" or "bad with money" or "not creative," you'll unconsciously prove yourself right.

The Antidote: Every action is a vote for the person you want to become. Want to be disciplined? Act disciplined once. Then again. And again. Your identity follows your actions.

Identity Hack: "I am becoming the type of person who [desired behavior]."

THE OBSTACLE ELIMINATION PRACTICE:

When you encounter resistance, ask:
1. What am I afraid of?
2. Is this fear based on reality or imagination?
3. What's the worst that could happen?
4. Can I handle that worst case?
5. What's the cost of inaction?

Usually, fear dissolves under direct examination.

Your obstacles are your opportunities. They're revealing exactly what you need to master next.`
    },
    implementation: {
      title: 'Chapter 7: Your 90-Day Transformation Plan',
      content: `Knowledge without action is just entertainment. This is your implementation blueprint.

YOUR 90-DAY COMMITMENT:

Not a year. Not "someday." 90 days of total commitment to transformation.

PHASE 1: FOUNDATION (Days 1-30)
Focus: Build Your Core Systems

Week 1: Establish Morning Routine
• Wake time: Set and non-negotiable
• 3 core habits: Exercise, meditation, planning
• Track daily: Simple checkboxes

Week 2: Eliminate Energy Drains
• Remove one bad habit
• Audit and reduce social media
• Clean physical environment

Week 3: Install Focus Systems
• Block 2-hour deep work daily
• Turn off all notifications
• Create distraction-free workspace

Week 4: Review and Reinforce
• What's working? Double down.
• What's not? Adjust.
• Celebrate consistency.

PHASE 2: ACCELERATION (Days 31-60)
Focus: Intensity and Optimization

Week 5: Add Second Morning Habit
• Reading, journaling, or skill practice
• Increase deep work to 3 hours
• Measure key metrics

Week 6: Relationship Audit
• Who energizes you? More time with them.
• Who drains you? Boundaries or distance.
• Find accountability partner.

Week 7: Financial Systems
• Automate savings
• Track every dollar for one week
• Identify and eliminate waste

Week 8: Mid-Point Mastery Review
• Assess all five pillars
• Recalibrate goals
• Plan Phase 3 focus

PHASE 3: SOLIDIFICATION (Days 61-90)
Focus: Lock In Long-Term Success

Week 9: Advanced Habit Stacking
• Chain habits together
• Systems running automatically
• Focus on consistency over perfection

Week 10: Push Your Edges
• Attempt something uncomfortable
• Fail forward fast
• Document lessons learned

Week 11: Contribution Focus
• How can you serve others?
• Share what you've learned
• Teaching reinforces learning

Week 12: 90-Day Review & Next Level Planning
• Complete life audit
• Celebrate all wins
• Design next 90-day transformation

YOUR DAILY NON-NEGOTIABLES:

□ Morning routine completed
□ Deep work session completed
□ Movement/exercise completed
□ Healthy meals (no processed junk)
□ Evening review completed
□ 7+ hours sleep scheduled

YOUR WEEKLY NON-NEGOTIABLES:

□ Sunday planning session
□ All daily non-negotiables hit 6/7 days
□ One uncomfortable action taken
□ Progress measured and recorded
□ One act of service/contribution

THE CONTRACT WITH YOURSELF:

I, _____________, commit to 90 days of total dedication to my transformation.

I understand that:
• Motivation will fade; I'll rely on discipline
• Obstacles will appear; I'll overcome them
• Discomfort will be constant; I'll embrace it
• Results will compound; I'll stay patient
• This investment will change my life; I'll honor it

Signed: ________________  Date: _________

START TOMORROW MORNING.

Not Monday. Not next month. Tomorrow.

The person you want to become is built one decision at a time. Starting now.`
    },
    conclusion: {
      title: 'Conclusion: The Beginning',
      content: `This isn't the end of the book. It's the beginning of your transformation.

Everything you've read means nothing without implementation. Ideas don't change lives—actions do.

THE TRUTH ABOUT TRANSFORMATION:

It's not linear. You'll have incredible days and terrible days. The terrible days are when discipline matters most. Anyone can stay consistent when they feel good. Champions stay consistent when everything hurts.

It's not fast. Real change takes time. The world wants overnight success stories, but sustainable transformation is built brick by brick, day by day, decision by decision.

It's not convenient. The path of least resistance leads to a life of mediocrity. Excellence requires sacrifice—not of joy, but of comfort. Of distraction. Of excuses.

It's not optional—if you want the life you dream about. You can't wish your way to success. You can't think your way to achievement. You can only work your way there.

YOUR CHOICE:

You stand at a fork in the road.

Path One: Close this book, feel inspired for 48 hours, then slip back into old patterns. Six months from now, nothing has changed.

Path Two: Implement ONE chapter. Just one. Master it completely. Let it transform that area of your life. Then add another. And another.

One year from now, you'll barely recognize yourself.

THE ULTIMATE SECRET:

There is no secret. No hack. No shortcut. No magic pill.

There's only:
• Clarity of purpose
• Consistency of action
• Commitment to growth
• Courage to persist

You already have everything you need. You always did. This book just organized it and reminded you.

YOUR NEXT STEP:

Put this down. Open your journal or notes app. Answer these three questions:

1. Which chapter resonated most deeply?
2. What's the first system I'll implement tomorrow?
3. Who will I share this commitment with for accountability?

Then close the app and go to sleep early. Because tomorrow, your new life begins.

THE FINAL TRUTH:

Discipline isn't restriction. It's freedom.
Focus isn't limitation. It's power.
Rules aren't constraints. They're liberation.
Success isn't luck. It's systems.

You don't need more information. You need more implementation.

You don't need more time. You need more discipline with the time you have.

You don't need different circumstances. You need different choices.

Everything changes when you change. And you change when you decide that staying the same is no longer an option.

The decision is yours. It always has been.

Make it now.

Build the life you deserve.

The world is waiting for the disciplined, focused, systematic version of you.

Go become that person.

Starting tomorrow morning.

One decision.
One day.
One discipline at a time.

Your transformation begins now.`
    }
  }

  const chapterList = [
    { id: 'intro', title: 'Introduction' },
    { id: 'discipline', title: 'Chapter 1: Discipline' },
    { id: 'focus', title: 'Chapter 2: Focus' },
    { id: 'rules', title: 'Chapter 3: The 12 Rules' },
    { id: 'pillars', title: 'Chapter 4: Five Pillars' },
    { id: 'systems', title: 'Chapter 5: Systems' },
    { id: 'obstacles', title: 'Chapter 6: Obstacles' },
    { id: 'implementation', title: 'Chapter 7: 90-Day Plan' },
    { id: 'conclusion', title: 'Conclusion' }
  ]

  const currentIndex = chapterList.findIndex(ch => ch.id === currentChapter)

  const goToNext = () => {
    if (currentIndex < chapterList.length - 1) {
      setCurrentChapter(chapterList[currentIndex + 1].id)
      setBookmarkProgress(((currentIndex + 2) / chapterList.length) * 100)
      window.scrollTo(0, 0)
    }
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentChapter(chapterList[currentIndex - 1].id)
      setBookmarkProgress(((currentIndex) / chapterList.length) * 100)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="book-container">
      <aside className="sidebar">
        <div className="book-header">
          <h1 className="book-title">THE DISCIPLINE CODE</h1>
          <p className="book-subtitle">Your Path to Mastery</p>
        </div>

        <div className="progress-indicator">
          <div className="progress-label">Reading Progress</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${bookmarkProgress}%` }}></div>
          </div>
          <div className="progress-percent">{Math.round(bookmarkProgress)}%</div>
        </div>

        <nav className="chapter-nav">
          {chapterList.map((chapter) => (
            <button
              key={chapter.id}
              className={`chapter-link ${currentChapter === chapter.id ? 'active' : ''}`}
              onClick={() => {
                setCurrentChapter(chapter.id)
                setBookmarkProgress(((chapterList.findIndex(ch => ch.id === chapter.id) + 1) / chapterList.length) * 100)
                window.scrollTo(0, 0)
              }}
            >
              {chapter.title}
            </button>
          ))}
        </nav>

        <div className="book-quote">
          <p>"Discipline is the bridge between goals and accomplishment."</p>
          <span>— Jim Rohn</span>
        </div>
      </aside>

      <main className="content">
        <article className="chapter">
          <h2 className="chapter-title">{chapters[currentChapter].title}</h2>
          <div className="chapter-content">
            {chapters[currentChapter].content.split('\n\n').map((paragraph, index) => (
              <p key={index} className={paragraph.startsWith('•') ? 'bullet-point' : ''}>{paragraph}</p>
            ))}
          </div>

          <div className="chapter-navigation">
            <button
              className="nav-button prev"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
            >
              ← Previous
            </button>
            <span className="chapter-indicator">
              {currentIndex + 1} of {chapterList.length}
            </span>
            <button
              className="nav-button next"
              onClick={goToNext}
              disabled={currentIndex === chapterList.length - 1}
            >
              Next →
            </button>
          </div>
        </article>
      </main>
    </div>
  )
}
