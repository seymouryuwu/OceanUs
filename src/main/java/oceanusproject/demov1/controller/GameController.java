package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.GameUnlockStateDTO;
import oceanusproject.demov1.dto.ScoreDTO;
import oceanusproject.demov1.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/game")
@CrossOrigin
public class GameController {
    @Autowired
    private GameService gameService;

    @PostMapping("/postgameresult")
    public ResponseEntity postGameResult(@RequestBody ScoreDTO scoreDTO) {
        gameService.saveHighestRecord(scoreDTO.getGameId(), scoreDTO.getScore());
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/getgameunlockstate")
    public List<GameUnlockStateDTO> getGameUnlockState() {
        return gameService.getGameUnlockState();
    }

    // these three api will be deleted later
    @PostMapping("/postshark")
    public ResponseEntity postShark(@RequestBody ScoreDTO scoreDTO) {
        gameService.saveHighestRecord(1, scoreDTO.getScore());
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PostMapping("/postpipe")
    public ResponseEntity postPipe(@RequestBody ScoreDTO scoreDTO) {
        gameService.saveHighestRecord(2, scoreDTO.getScore());
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PostMapping("/postmemory")
    public ResponseEntity postMemory(@RequestBody ScoreDTO scoreDTO) {
        gameService.saveHighestRecord(3, scoreDTO.getScore());
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
