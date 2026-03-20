// ============================================================
//  Copilot Dev Day — Hackathon Leaderboard
//  "Found this in last year's intern repo. Good luck." — Management
// ============================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var moment = require('moment');

var app = express();
var PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
var teamRoutes = require('./routes/teams');
var leaderboardRoutes = require('./routes/leaderboard');

app.use('/api/teams', teamRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// ---- Dashboard page ----
app.get('/', function(req, res) {
    var db = require('./db');
    var teams = db.getTeams();
    var scores = db.getScores();

    // Build leaderboard by joining teams and scores
    var leaderboard = [];
    for (var i = 0; i < teams.length; i++) {
        for (var j = 0; j < scores.length; j++) {
            if (teams[i].id == scores[j].teamId) {
                leaderboard.push({
                    team: teams[i],
                    totalScore: scores[j].points,
                    lastUpdated: moment(scores[j].updatedAt).fromNow()
                });
            }
        }
    }

    // Sort by score
    leaderboard.sort(function(a, b) {
        return a.totalScore - b.totalScore;   // BUG: ascending — shows lowest first
    });

    res.render('dashboard', {
        title: 'Copilot Dev Day — Hackathon Leaderboard',
        leaderboard: leaderboard,
        timestamp: moment().format('h:mm:ss A')
    });
});

// Health check
app.get('/health', function(req, res) {
    res.json({ status: 'ok', uptime: process.uptime() });
});

// Error handler
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        error: err.message,
        stack: err.stack          // SECURITY: leaks internals to client
    });
});

app.listen(PORT, function() {
    console.log('='.repeat(50));
    console.log('  Hackathon Leaderboard');
    console.log('  http://localhost:' + PORT);
    console.log('='.repeat(50));
});
