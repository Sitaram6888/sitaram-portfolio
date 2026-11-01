from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem
)
from reportlab.lib.styles import ParagraphStyle

NAVY = HexColor("#0B132B")
BLUE = HexColor("#1D4ED8")
SLATE = HexColor("#334155")
GRAY = HexColor("#64748B")
RULE = HexColor("#CBD5E1")

OUT = "/app/frontend/public/Sitaram_Kumar_Resume.pdf"

name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=21, leading=24, textColor=NAVY, alignment=TA_CENTER)
tagline = ParagraphStyle("tagline", fontName="Helvetica", fontSize=10.5, leading=13, textColor=BLUE, alignment=TA_CENTER, spaceBefore=2)
contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=8.8, leading=12, textColor=SLATE, alignment=TA_CENTER, spaceBefore=3)
section = ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=NAVY, spaceBefore=11, spaceAfter=2)
body = ParagraphStyle("body", fontName="Helvetica", fontSize=9.3, leading=12.6, textColor=SLATE)
bullet = ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.3, leading=12.6, textColor=SLATE)
jobtitle = ParagraphStyle("jobtitle", fontName="Helvetica-Bold", fontSize=9.8, leading=12.8, textColor=NAVY)
meta = ParagraphStyle("meta", fontName="Helvetica-Oblique", fontSize=8.8, leading=11.5, textColor=GRAY)

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=16 * mm, rightMargin=16 * mm, topMargin=13 * mm, bottomMargin=13 * mm,
    title="Sitaram Kumar - Resume", author="Sitaram Kumar",
)

def rule():
    return HRFlowable(width="100%", thickness=0.7, color=RULE, spaceBefore=1, spaceAfter=5)

def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, bullet), leftIndent=10, value="\u2022") for t in items],
        bulletType="bullet", start="\u2022", leftIndent=10, bulletFontSize=7,
    )

story = []

story.append(Paragraph("SITARAM KUMAR", name))
story.append(Paragraph("Aspiring Software Developer | MERN Stack", tagline))
story.append(Paragraph(
    "Delhi, India &nbsp;|&nbsp; +91 9006841356 &nbsp;|&nbsp; kumarsitaram688@gmail.com<br/>"
    "LinkedIn: linkedin.com/in/sitaram-kumar-29b312445 &nbsp;|&nbsp; GitHub: github.com/Sitaram6888",
    contact))

story.append(Paragraph("PROFESSIONAL SUMMARY", section)); story.append(rule())
story.append(Paragraph(
    "B.Tech Computer Science and Engineering student (Class of 2027) with a strong foundation in C++, "
    "Data Structures &amp; Algorithms and full-stack web development using the MERN stack. Hands-on experience "
    "building API-driven web applications, managing client-side state and crafting responsive user interfaces. "
    "Passionate about writing clean code, solving complex problems and building reliable software systems.", body))

story.append(Paragraph("TECHNICAL SKILLS", section)); story.append(rule())
story.append(Paragraph("<b>Programming Languages:</b> C++, JavaScript (ES6+)", body))
story.append(Paragraph("<b>Frontend:</b> React.js, React Hooks, Context API, React Router, HTML5, CSS3, Bootstrap", body))
story.append(Paragraph("<b>Backend:</b> Node.js, Express.js, REST APIs", body))
story.append(Paragraph("<b>Database:</b> MongoDB", body))
story.append(Paragraph("<b>Tools:</b> Git, GitHub, Visual Studio Code, Vercel", body))
story.append(Paragraph("<b>Core Concepts:</b> Data Structures &amp; Algorithms, Problem Solving, Asynchronous JavaScript, CRUD Operations", body))

story.append(Paragraph("PROJECTS", section)); story.append(rule())

story.append(Paragraph("MERN Stack E-Commerce Application", jobtitle))
story.append(Paragraph("MongoDB, Express.js, React.js, Node.js &nbsp;|&nbsp; github.com/Sitaram6888/Skart", meta))
story.append(bullets([
    "Developed a full-stack e-commerce application with product browsing, product details and shopping-cart workflows.",
    "Built REST API routes for seamless CRUD operations and secure user authentication.",
    "Managed global state using Context API and implemented dynamic navigation with React Router.",
]))

story.append(Spacer(1, 4))
story.append(Paragraph("Product Listing Application", jobtitle))
story.append(Paragraph("React.js, JavaScript, DummyJSON API", meta))
story.append(bullets([
    "Built a responsive interface that fetches and displays products from the DummyJSON API using reusable React components.",
    "Added real-time search and filtering, dynamic routing, and handled API loading and error states gracefully.",
]))

story.append(Spacer(1, 4))
story.append(Paragraph("Shopping Cart Application", jobtitle))
story.append(Paragraph("React.js, Context API, JavaScript", meta))
story.append(bullets([
    "Implemented cart management with quantity handling and automatic total price calculation using React Context API.",
    "Applied array methods and derived state to keep pricing accurate across every cart action.",
]))

story.append(Paragraph("EDUCATION", section)); story.append(rule())
story.append(Paragraph("B.Tech, Computer Science &amp; Engineering", jobtitle))
story.append(Paragraph("Ganga Institute of Technology &amp; Management &nbsp;|&nbsp; 2023 \u2013 2027 &nbsp;|&nbsp; CGPA: 7.57", meta))
story.append(Spacer(1, 3))
story.append(Paragraph("<b>Class XII</b> \u2014 BSEB Board, 2023 \u2014 63.2%", body))
story.append(Paragraph("<b>Class X</b> \u2014 BSEB Board, 2021 \u2014 65%", body))

story.append(Paragraph("CERTIFICATIONS", section)); story.append(rule())
story.append(bullets([
    "Project-Based Training Certificate (IoT, Machine Learning, Deep Learning, AI) \u2014 GCSED, GITM Jhajjar",
]))

doc.build(story)
print("written", OUT)
