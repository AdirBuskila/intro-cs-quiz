# -*- coding: utf-8 -*-
"""Authoring helpers for the c_strings course. author.py turns the level modules into courses/c_strings/C0N.js."""
import json


def F(code, tag="c"):
    """A fenced code block for rich text."""
    return "```" + tag + "\n" + code.strip("\n") + "\n```"


def L(*lines):
    return "\n".join(lines)


IDS = "abcdefgh"


def mcq(qid, question, options, correct, explanation, recap):
    return {"id": qid, "question": question,
            "options": [{"id": IDS[i], "value": v} for i, v in enumerate(options)],
            "correctId": IDS[correct], "explanation": explanation, "recap": recap}


def numeric(qid, prompt, answer, explain, recap):
    return {"id": qid, "step": {"type": "numeric", "prompt": prompt, "answer": answer, "tol": 0, "explain": explain},
            "recap": recap}


def text(qid, prompt, accept, explain, recap, normalize="none"):
    return {"id": qid, "step": {"type": "text", "prompt": prompt, "accept": accept, "normalize": normalize,
                                "explain": explain}, "recap": recap}


def order(qid, prompt, lines, explain, recap):
    return {"id": qid, "step": {"type": "order", "prompt": prompt, "code": True, "lines": lines, "explain": explain},
            "recap": recap}


def findbug(qid, prompt, lines, bug, explain, recap):
    return {"id": qid, "step": {"type": "findbug", "prompt": prompt, "code": True, "lines": lines, "bugIndex": bug,
                                "explain": explain}, "recap": recap}


def fillblank(qid, prompt, lines, blank, options, correct, explain, recap):
    return {"id": qid, "step": {"type": "fillblank", "prompt": prompt, "code": True, "lines": lines,
                                "blankIndex": blank,
                                "options": [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(options)],
                                "correctId": IDS[correct], "explain": explain}, "recap": recap}


def bank(bid, recap):
    return {"bankId": bid, "recap": recap}


def level(lid, order_, icon, title, goal, lesson, questions, boss=False):
    return {"id": lid, "order": order_, "icon": icon, "title": title, "goal": goal, "boss": boss,
            "source": "ai-draft", "lesson": lesson, "questions": questions}


def emit(course, lv):
    html = lv["lesson"]
    assert "`" not in html and "${" not in html, lv["id"]
    body = {k: v for k, v in lv.items() if k != "lesson"}
    if not body["boss"]:
        del body["boss"]
    questions = json.dumps(body.pop("questions"), ensure_ascii=False, indent=2)
    head = json.dumps(body, ensure_ascii=False, indent=2)[1:-1].rstrip()
    return ("/* c_strings course, level %s - %s */\n" % (lv["id"], lv["title"]) +
            'COURSE_LEVEL("%s", {\n%s,\n  lesson: { html: String.raw`%s` },\n  questions: %s,\n});\n'
            % (course, head.strip("\n"), html, questions))
